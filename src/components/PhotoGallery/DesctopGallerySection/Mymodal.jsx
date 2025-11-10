import React, { useEffect, useMemo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import "./MyModal.scss";
import customModalData from "../../Shared/CustomModal/customModalData";
import { WithTransLate } from "../../helpers/translating";
import Link from "../../Shared/ui/Link";
import IconButton from "../../Shared/ui/IconButton"

/* Figma sizes (Content = 1008px: 592 + 32 + 384) */
const HERO_W = 592;
const HERO_H = 382;
const GAP = 32;
const ASIDE_W = 384;

const clampIndex = (i, n) => (i + n) % n;

/* Global pinned set (owned by the grid; modal respects it) */
const PIN =
  typeof window !== "undefined"
    ? (window.__BH_PIN = window.__BH_PIN || new Set())
    : new Set();

/* ---------------------------------------------------------------------------
   In-module image cache + decode queue
   - FIFO cache with "pin" support
   - Decode current + NEXT only
--------------------------------------------------------------------------- */
const __imgCache = new Map(); // src -> { img, status, promise }
const __cacheOrder = [];
const MAX_CACHE_ITEMS = 80; // tight budget; active-tab heroes are pinned

const rIC =
  typeof window !== "undefined" &&
  typeof window.requestIdleCallback === "function"
    ? window.requestIdleCallback
    : (cb) =>
        setTimeout(() => cb({ didTimeout: true, timeRemaining: () => 0 }), 120);

const __q = [];
let __running = false;

function clearDecodeQueue() {
  __q.length = 0;
}
function runQueue() {
  if (__running) return;
  __running = true;
  const step = () => {
    const job = __q.shift();
    if (!job) {
      __running = false;
      return;
    }
    const { src, resolve } = job;
    rIC(async () => {
      await preload(src);
      resolve();
      setTimeout(step, 0);
    });
  };
  step();
}
function enqueueDecode(src) {
  if (!src || document.hidden) return Promise.resolve();
  const hit = __imgCache.get(src);
  if (hit && (hit.status === "loaded" || hit.status === "pending")) {
    return hit.promise || Promise.resolve();
  }
  return new Promise((resolve) => {
    __q.push({ src, resolve });
    runQueue();
  });
}
function trimCache() {
  // Evict oldest non-pinned, non-pending entries
  let guard = 0;
  while (
    __cacheOrder.length > MAX_CACHE_ITEMS &&
    guard < __cacheOrder.length + 8
  ) {
    guard += 1;
    const victim = __cacheOrder.shift();
    if (!victim) break;
    if (PIN.has(victim)) {
      __cacheOrder.push(victim);
      continue;
    }
    const e = __imgCache.get(victim);
    if (!e || e.status !== "pending") __imgCache.delete(victim);
    else __cacheOrder.push(victim);
  }
}
function preload(src) {
  if (!src) return Promise.resolve();
  const hit = __imgCache.get(src);
  if (hit) return hit.promise || Promise.resolve();

  const img = new Image();
  img.decoding = "async";
  img.loading = "eager";
  img.src = src;

  if (!__cacheOrder.includes(src)) __cacheOrder.push(src);

  const promise =
    typeof img.decode === "function"
      ? img
          .decode()
          .then(() => {
            __imgCache.set(src, { img, status: "loaded", promise });
            trimCache();
          })
          .catch(() => {
            __imgCache.set(src, { img, status: "error", promise });
            trimCache();
          })
      : new Promise((resolve) => {
          img.onload = () => {
            __imgCache.set(src, { img, status: "loaded", promise });
            trimCache();
            resolve();
          };
          img.onerror = () => {
            __imgCache.set(src, { img, status: "error", promise });
            trimCache();
            resolve();
          };
        });

  __imgCache.set(src, { img, status: "pending", promise });
  return promise;
}
function isDecoded(src) {
  const hit = __imgCache.get(src);
  return !!hit && hit.status === "loaded";
}

/* Expose cache controls to the app (tabs call these) */
if (typeof window !== "undefined") {
  window.__BH_TRIM = trimCache;
  window.__BH_CLEAR_Q = clearDecodeQueue;
  window.__BH_PIN = PIN;
}

/* ---------------------------------------------------------------------------
  Persist last viewed slide per entity (localStorage + in-memory)
--------------------------------------------------------------------------- */
const STORE_KEY = "bh_lightbox_state_v1";
let __stateMap = new Map();
try {
  const raw = localStorage.getItem(STORE_KEY);
  if (raw) {
    const obj = JSON.parse(raw);
    __stateMap = new Map(
      Object.entries(obj).map(([k, v]) => [k, Number(v) || 0])
    );
  }
} catch {}
function persistState() {
  try {
    localStorage.setItem(
      STORE_KEY,
      JSON.stringify(Object.fromEntries(__stateMap))
    );
  } catch {}
}
function makeKey(tabIndex, title) {
  return `${tabIndex}|${String(title || "")}`;
}
function getSavedIndex(key) {
  const v = __stateMap.get(key);
  return typeof v === "number" && v >= 0 ? v : 0;
}
function saveIndex(key, i) {
  __stateMap.set(key, Number(i) || 0);
  persistState();
}

/* ---------------------------------------------------------------------------
   Runtime guard CSS injected while modal is open
--------------------------------------------------------------------------- */
const GUARD_STYLE_ID = "bh-modal-guard-style";
const GUARD_CSS = `
html.bh-modal-open,
html.bh-modal-open body,
html.bh-modal-open #root,
html.bh-modal-open #__next,
html.bh-modal-open .app,
html.bh-modal-open .accom,
html.bh-modal-open .bh-backdrop,
html.bh-modal-open .bh-modal {
  transform: none !important;
  filter: none !important;
}
html.bh-modal-open .bh-modal *:active,
html.bh-modal-open .bh-backdrop *:active {
  transform: none !important;
  filter: none !important;
}
html.bh-modal-open .bh-modal,
html.bh-modal-open .bh-modal * {
  transition-property: none !important;
  animation: none !important;
}
`;

/* ---------------------------------------------------------------------------
   Generic lightbox (Houses / Rooms / Surroundings)
--------------------------------------------------------------------------- */
function GenericLightbox({ open, onClose, dataIndex, initialTitle }) {
  const tabIndex = Number.isInteger(dataIndex) ? dataIndex : 0;
  const data = customModalData[tabIndex];

  const [title] = useState(initialTitle || (data?.[0]?.title ?? ""));
  const entity = useMemo(
    () =>
      Array.isArray(data)
        ? data.find((h) => h.title === title) || data[0]
        : null,
    [data, title]
  );

  const pictures = useMemo(() => {
    const arr = Array.isArray(entity?.backgrounds) ? entity.backgrounds : [];
    return arr.slice(0, 6);
  }, [entity]);

  const stateKey = useMemo(
    () => makeKey(tabIndex, entity?.title || ""),
    [tabIndex, entity?.title]
  );
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (open) clearDecodeQueue();
  }, [open, stateKey]);

  // Initial restore + decode current and NEXT
  useEffect(() => {
    const saved = getSavedIndex(stateKey);
    const safe = pictures.length ? clampIndex(saved, pictures.length) : 0;
    setIdx(safe);

    const cur = pictures[safe];
    if (cur && !isDecoded(cur)) enqueueDecode(cur);

    const next = pictures.length
      ? pictures[clampIndex(safe + 1, pictures.length)]
      : undefined;
    if (next && !isDecoded(next)) enqueueDecode(next);
  }, [stateKey, pictures]);

  // On index change: decode current and NEXT
  useEffect(() => {
    const cur = pictures[idx];
    if (cur && !isDecoded(cur)) enqueueDecode(cur);
    const next = pictures.length
      ? pictures[clampIndex(idx + 1, pictures.length)]
      : undefined;
    if (next && !isDecoded(next)) enqueueDecode(next);
  }, [idx, pictures]);

  const setAndSave = useCallback(
    (nextIndex) => {
      setIdx(nextIndex);
      saveIndex(stateKey, nextIndex);
    },
    [stateKey]
  );

  const onPrev = useCallback(() => {
    if (pictures.length) setAndSave(clampIndex(idx - 1, pictures.length));
  }, [idx, pictures.length, setAndSave]);
  const onNext = useCallback(() => {
    if (pictures.length) setAndSave(clampIndex(idx + 1, pictures.length));
  }, [idx, pictures.length, setAndSave]);
  const onDot = useCallback((i) => setAndSave(i), [setAndSave]);
  const onThumb = useCallback((i) => setAndSave(i), [setAndSave]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey, { passive: true });
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open || !entity) return null;

  const desc = entity.fullDescription || entity.description || "";
  const paragraphs = desc
    .split(/\n+/)
    .map((t) => t.trim())
    .filter(Boolean);

  const thumbsClass =
    pictures.length === 6
      ? "bh-thumbs bh-thumbs--six"
      : "bh-thumbs bh-thumbs--auto";

  const modal = (
    <div className="bh-backdrop" onClick={onClose}>
      <div
        className="bh-modal"
        role="dialog"
        aria-modal="true"
        aria-label={entity.title || "Accommodation"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bh-header">
          <button
            type="button"
            className="bh-closeX"
            onClick={onClose}
            aria-label="Close"
          />
        </div>

        <div className="bh-content">
          <div
            className="bh-layout"
            style={{ gridTemplateColumns: `${HERO_W}px ${GAP}px ${ASIDE_W}px` }}
          >
            {/* Left: hero + thumbnails */}
            <div className="bh-col-left" style={{ width: HERO_W }}>
              <div
                className="bh-hero"
                style={{ width: HERO_W, height: HERO_H }}
              >
                {pictures[idx] ? (
                  <img
                    src={pictures[idx]}
                    alt={`${entity.title || "Photo"} ${idx + 1}`}
                    className="bh-hero-img"
                    width={592}
                    height={382}
                    decoding="async"
                    loading="eager"
                    fetchpriority="high"
                    draggable="false"
                  />
                ) : (
                  <div className="bh-hero-fallback">No image</div>
                )}

                {pictures.length > 1 && (
                  <>
                    <div className="bh-nav-zone bh-nav-zone--prev">
                      <IconButton icon="chevronLeft" size="lg" onClick={onPrev} onMouseDown={(e) => {
                       e.preventDefault()}} />
                    </div>
                    <div className="bh-nav-zone bh-nav-zone--next">
                      <IconButton icon="chevronRight" size="lg" onClick={onNext} onMouseDown={(e) => {e.preventDefault()}} />
                    </div>
                  </>
                )}

                {pictures.length > 1 && (
                  <div className="bh-dotbar">
                    {pictures.map((_, i) => (
                      <button
                        key={`dot-${i}`}
                        className={i === idx ? "bh-dot is-active" : "bh-dot"}
                        aria-label={`Go to image ${i + 1}`}
                        onClick={() => onDot(i)}
                        type="button"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className={thumbsClass} style={{ width: HERO_W }}>
                {pictures.map((src, i) => (
                  <button
                    key={`thumb-${i}`}
                    type="button"
                    className={i === idx ? "bh-thumb is-active" : "bh-thumb"}
                    onClick={() => onThumb(i)}
                    aria-label={`Thumbnail ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      width={72}
                      height={72}
                      decoding="async"
                      loading="lazy"
                      fetchpriority="low"
                      draggable="false"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: text + CTA */}
            <div className="bh-col-right" style={{ width: ASIDE_W }}>
              <h3 className="bh-title">
                <WithTransLate text={entity.title || ""} />
              </h3>

              <div className="bh-desc" role="document" aria-label="Description">
                {paragraphs.map((p, i) => (
                  <p key={`p-${i}`}>
                    <WithTransLate text={p} />
                  </p>
                ))}
              </div>

              <Link href="https://beds24.com/booking2.php?propid=3578&layout=1" className="bh-cta"><WithTransLate text="Book now"/></Link>

            </div>
          </div>
        </div>
        {/* end content */}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

GenericLightbox.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  dataIndex: PropTypes.number.isRequired, // 0 Houses, 1 Rooms, 2 Surroundings
  initialTitle: PropTypes.string,
};

export default function MyModal({
  index,
  open,
  setOpen,
  setTabIndex,
  initialTitle,
}) {
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  useEffect(() => {
    if (!open) return undefined;

    // Scroll lock + state class
    const html = document.documentElement;
    const body = document.body;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    html.classList.add("bh-modal-open");

    // Inert the section behind the modal
    const hosts = Array.from(document.querySelectorAll(".accom"));
    hosts.forEach((el) => el.setAttribute("inert", ""));

    // Runtime guard style
    let guard = document.getElementById(GUARD_STYLE_ID);
    if (!guard) {
      guard = document.createElement("style");
      guard.id = GUARD_STYLE_ID;
      guard.type = "text/css";
      guard.appendChild(document.createTextNode(GUARD_CSS));
      document.head.appendChild(guard);
    }

    return () => {
      body.style.overflow = prevOverflow;
      html.classList.remove("bh-modal-open");
      hosts.forEach((el) => el.removeAttribute("inert"));
    };
  }, [open]);

  if (!open) return null;

  return (
    <GenericLightbox
      open={open}
      onClose={handleClose}
      dataIndex={index}
      initialTitle={initialTitle}
    />
  );
}

MyModal.propTypes = {
  index: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setTabIndex: PropTypes.func,
  initialTitle: PropTypes.string,
};
