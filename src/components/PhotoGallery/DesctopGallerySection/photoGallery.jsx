/* eslint-disable react/jsx-no-bind */
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { Element } from "react-scroll"; // Anchor for react-scroll navigation
import "./PhotoGallery.scss";
import MyModal from "./Mymodal";
import customModalData from "../../Shared/CustomModal/customModalData";

/** Tabs (visual order and indices) */
const TABS = ["Houses", "Rooms", "Surroundings"];
const TAB_TO_INDEX = { Houses: 0, Rooms: 1, Surroundings: 2 };

/** LocalStorage state (read once per tab render, not per item) */
const STORE_KEY = "bh_lightbox_state_v1";
function readStateSnapshot() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Minimized idle callback */
const fastRIC = (cb) => setTimeout(cb, 8);

/** Simplified image preloader with immediate cleanup */
const imagePreloader = (() => {
  const preloadedUrls = new Set();
  let activeRequests = 0;
  const MAX_CONCURRENT = 2;

  return {
    preload(src) {
      if (!src || preloadedUrls.has(src) || activeRequests >= MAX_CONCURRENT)
        return;

      activeRequests++;
      preloadedUrls.add(src);

      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      link.onload = link.onerror = () => {
        activeRequests = Math.max(0, activeRequests - 1);
      };
      document.head.appendChild(link);
    },

    clear() {
      preloadedUrls.clear();
      activeRequests = 0;
      // Remove preload links
      document
        .querySelectorAll('link[rel="preload"][as="image"]')
        .forEach((l) => l.remove());
    },
  };
})();

/** Optimized SmartImg with faster intersection detection */
const BLANK_1x1 = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

function SmartImg({ src, alt, width, height, priority, fetchpriority }) {
  const [loaded, setLoaded] = useState(priority);
  const [visible, setVisible] = useState(priority);
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (priority || visible) return;

    const element = ref.current;
    if (!element) return;

    let cancelled = false;

    const activate = () => {
      if (cancelled) return;
      setVisible(true);
      setLoaded(true);
    };

    if ("IntersectionObserver" in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            activate();
            observerRef.current?.disconnect();
          }
        },
        { rootMargin: "200px", threshold: 0.1 }
      );
      observerRef.current.observe(element);
    } else {
      fastRIC(activate);
    }

    return () => {
      cancelled = true;
      observerRef.current?.disconnect();
    };
  }, [src, priority, visible]);

  const handleLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setLoaded(false);
  }, []);

  if (!visible) {
    return (
      <div
        ref={ref}
        style={{
          backgroundColor: "#f6f7f9",
          width: width,
          height: height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    );
  }

  return (
    <img
      ref={ref}
      src={loaded ? src : BLANK_1x1}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchpriority={fetchpriority}
      style={{ backgroundColor: loaded ? "transparent" : "#f6f7f9" }}
      draggable="false"
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}

/**
 * Picks a stable cover image for a card.
 */
function pickCover(title, arr, explicitCover) {
  if (explicitCover) return explicitCover;
  const list = Array.isArray(arr) ? arr : [];
  const lcTitle = String(title || "").toLowerCase();
  if (lcTitle.includes("blue")) {
    const hints = ["stair", "stairs", "interior", "inside", "hall"];
    const hit = list.find((src) =>
      hints.some((h) => String(src).toLowerCase().includes(h))
    );
    if (hit) return hit;
  }
  return list[0] || "";
}

/** Map raw data into UI cards using a single state snapshot */
function mapDataFor(tabName, stateSnapshot) {
  const idx = TAB_TO_INDEX[tabName];
  const src = customModalData[idx] || [];
  return src.map((item) => {
    const bgs = Array.isArray(item.backgrounds) ? item.backgrounds : [];
    const saved =
      Number(stateSnapshot?.[`${idx}|${String(item.title || "")}`]) || 0;
    const hero =
      bgs.length > 0
        ? bgs[((saved % bgs.length) + bgs.length) % bgs.length]
        : "";
    const cover = pickCover(item.title, bgs, item.cover);
    return {
      id: String(item.title)
        .toLowerCase()
        .replace(/[^\w]+/g, "-"),
      title: item.title,
      excerpt: typeof item.description === "string" ? item.description : "",
      cover,
      hero,
      modalTabIndex: idx,
    };
  });
}

/** Memoized Card Component */
const Card = React.memo(function Card({
  card,
  index,
  active,
  onCardClick,
  onCardKeyDown,
  onCardInteraction,
}) {
  const isPriority = index === 0; // Only first card priority

  return (
    <article
      className="accom__card"
      role="button"
      tabIndex={0}
      onMouseEnter={() => onCardInteraction(card)}
      onFocus={() => onCardInteraction(card)}
      onClick={() => onCardClick(card)}
      onKeyDown={(e) => onCardKeyDown(e, card)}
    >
      <div className="accom__media">
        <SmartImg
          src={card.cover}
          alt={card.title}
          width={active === "Rooms" ? 466 : 368}
          height={368}
          priority={isPriority}
          fetchpriority={isPriority ? "high" : "low"}
        />
      </div>
      <div className="accom__body">
        <h3 className="accom__card-title">{card.title}</h3>
        <div className="accom__divider" />
        <p className="accom__text">
          {(() => {
            if (
              active === "Surroundings" &&
              /northern\s+lights/i.test(card.title)
            ) {
              const text = card.excerpt || "";
              const key = " the best place to ";
              const idx = text.toLowerCase().indexOf(key);
              if (idx !== -1) {
                const cut = idx + key.length;
                const head = text.slice(0, cut);
                const tail = text.slice(cut);
                return (
                  <>
                    {head}
                    <span className="nowrap">{tail}</span>
                  </>
                );
              }
              return <span className="nowrap">{text}</span>;
            }
            return card.excerpt;
          })()}
        </p>
      </div>
    </article>
  );
});

export default function PhotoGallery() {
  const [active, setActive] = useState("Houses");
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(TAB_TO_INDEX.Houses);
  const [initialTitle, setInitialTitle] = useState("");

  // Tab UI refs
  const tablistRef = useRef(null);
  const tabsRef = useRef([]);
  const labelsRef = useRef([]);
  const indicatorRef = useRef(null);

  // Simple tab data cache - keep all tabs loaded after first visit
  const [tabDataCache] = useState(() => new Map());

  // Memoized data with persistent caching
  const list = useMemo(() => {
    if (tabDataCache.has(active)) {
      return tabDataCache.get(active);
    }

    const stateSnap = readStateSnapshot();
    const data = mapDataFor(active, stateSnap);
    tabDataCache.set(active, data);
    return data;
  }, [active, tabDataCache]);

  // Track preloaded images
  const preloadedRef = useRef(new Set());

  // Keyboard navigation
  const onTabsKeyDown = useCallback(
    (e) => {
      const i = TABS.indexOf(active);
      if (e.key === "ArrowRight") {
        const n = (i + 1) % TABS.length;
        setActive(TABS[n]);
        tabsRef.current[n]?.focus();
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        const p = (i - 1 + TABS.length) % TABS.length;
        setActive(TABS[p]);
        tabsRef.current[p]?.focus();
        e.preventDefault();
      } else if (e.key === "Home") {
        setActive(TABS[0]);
        tabsRef.current[0]?.focus();
        e.preventDefault();
      } else if (e.key === "End") {
        const last = TABS.length - 1;
        setActive(TABS[last]);
        tabsRef.current[last]?.focus();
        e.preventDefault();
      }
    },
    [active]
  );

  // Fast indicator positioning
  const positionIndicator = useCallback(() => {
    const i = TABS.indexOf(active);
    const label = labelsRef.current[i];
    const wrap = tablistRef.current;
    const ind = indicatorRef.current;
    if (!label || !wrap || !ind) return;

    const r = label.getBoundingClientRect();
    const w = wrap.getBoundingClientRect();
    const maxKnob = 56;
    const knobWidth = Math.min(r.width, maxKnob);
    const left = r.left - w.left + r.width / 2 - knobWidth / 2;

    ind.style.setProperty("--i-left", `${left}px`);
    ind.style.setProperty("--i-width", `${knobWidth}px`);
  }, [active]);

  useLayoutEffect(() => {
    fastRIC(positionIndicator);
  }, [active, positionIndicator]);

  useEffect(() => {
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(positionIndicator);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [positionIndicator]);

  // Minimal cleanup - only clear image preloader
  useEffect(() => {
    imagePreloader.clear();
    preloadedRef.current.clear();
  }, [active]);

  // Preload first image only
  useEffect(() => {
    const firstCard = list[0];
    if (firstCard?.cover && !preloadedRef.current.has(firstCard.cover)) {
      preloadedRef.current.add(firstCard.cover);
      imagePreloader.preload(firstCard.cover);
    }
  }, [list]);

  // Card interaction handlers
  const handleCardClick = useCallback((card) => {
    setTabIndex(card.modalTabIndex);
    setInitialTitle(card.title);
    setOpen(true);
  }, []);

  const handleCardKeyDown = useCallback(
    (e, card) => {
      if (e.key === "Enter") {
        handleCardClick(card);
      }
    },
    [handleCardClick]
  );

  const handleCardInteraction = useCallback((card) => {
    const src = card.cover;
    if (src && !preloadedRef.current.has(src)) {
      preloadedRef.current.add(src);
      imagePreloader.preload(src);
    }
  }, []);

  return (
    // react-scroll anchor wrapper to enable SideNavbar scrolling
    <Element name="ACCOMMODATION_DESKTOP">
      <section className="accom" id="ACCOMMODATION_DESKTOP">
        <div className="accom__container">
          <div className="accom__heading">
            <h2 className="accom__title">ACCOMMODATION OPTIONS</h2>
            <p className="accom__subtitle">
              Enjoy a relaxing stay 10 minutes from downtown
            </p>
          </div>

          <div
            className="accom__tabs"
            role="tablist"
            aria-label="Accommodation categories"
            onKeyDown={onTabsKeyDown}
            ref={tablistRef}
          >
            {TABS.map((t, i) => (
              <button
                key={t}
                ref={(el) => (tabsRef.current[i] = el)}
                id={`tab-${t}`}
                role="tab"
                aria-selected={active === t}
                aria-controls={`panel-${t}`}
                type="button"
                className={active === t ? "accom__tab is-active" : "accom__tab"}
                onClick={() => setActive(t)}
                data-width={t === "Houses" ? 176 : t === "Rooms" ? 176 : 208}
              >
                <span
                  className="accom__tab-label"
                  ref={(el) => (labelsRef.current[i] = el)}
                >
                  {t}
                </span>
              </button>
            ))}
            <span className="accom__indicator" ref={indicatorRef} />
          </div>

          <div
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
          >
            <div
              className={`accom__grid ${
                active === "Rooms" ? "accom__grid--rooms" : ""
              } ${active === "Surroundings" ? "accom__grid--sur" : ""}`}
            >
              {list.map((card, i) => (
                <Card
                  key={card.id}
                  card={card}
                  index={i}
                  active={active}
                  onCardClick={handleCardClick}
                  onCardKeyDown={handleCardKeyDown}
                  onCardInteraction={handleCardInteraction}
                />
              ))}
            </div>
          </div>
        </div>

        {open && (
          <MyModal
            index={tabIndex}
            open={open}
            setOpen={setOpen}
            setTabIndex={setTabIndex}
            initialTitle={initialTitle}
          />
        )}
      </section>
    </Element>
  );
}
