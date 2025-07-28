// ✅ Search.js
import React, { useState, useRef, useEffect } from "react";
import { InputBase } from "@material-ui/core";
import { useClickOutside } from "../../hooks/useClickOutside";
import SearchIcon from "../../images/SearchIcon_Header.svg";
import CloseIcon from "../../images/close-white.svg";
import keywords from "./keywords.json";
import s from "../../components/header/search.module.scss";

export default function Search({ onSearchToggle }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ref = useRef();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useClickOutside(ref, () => {
    setOpen(false);
    setQuery("");
    setResults([]);
    shiftDown(false);
    if (onSearchToggle) onSearchToggle(false);
  });

  const isDesktop = windowWidth >= 1280;
  const isMobile = windowWidth < 1280;

  const handleSearch = (value) => {
    setQuery(value);
    if (!value) return setResults([]);

    const matches = Object.entries(keywords)
      .filter(([key]) => key.toLowerCase().includes(value.toLowerCase()))
      .map(([key, links]) => ({ key, links }));

    setResults(matches);
  };

  const handleSelect = (url) => {
    if (typeof url === "string") {
      if (url.startsWith("http")) window.open(url, "_blank");
      else window.location.href = url;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && results.length > 0) {
      const first = results[0].links;
      if (typeof first === "string") handleSelect(first);
      else if (Array.isArray(first) && first[0]) handleSelect(first[0]);
    }
  };

  const shiftDown = (expand) => {
    const shiftTarget = document.getElementById("searchShiftTarget");
    if (shiftTarget) {
      // Smooth transition for layout shift
      shiftTarget.style.transition = "margin-top 0.3s ease";

      // Apply vertical space below the header when search is open
      shiftTarget.style.marginTop = expand
        ? window.innerWidth < 600
          ? "65px" // More space for small mobile screens (e.g., iPhone)
          : "65px" // Slightly less space for tablets and small laptops
        : "0px"; // Reset when search is closed
    }
  };

  const handleToggle = () => {
    const next = !open;
    setOpen(next);
    
    // Call callback to notify parent component
    if (onSearchToggle) onSearchToggle(next);
    
    if (isMobile) shiftDown(next);
    if (!next) {
      setQuery("");
      setResults([]);
    }
  };

  // Determine class for input wrapper based on screen size
  const getInputWrapperClass = () => {
    if (isDesktop) {
      return `${s.inputWrapperDesktop} ${open ? s.active : ""}`;
    } else {
      return `${s.inputWrapperMobile} ${open ? s.active : ""}`;
    }
  };

  return (
    <div className={s.searchContainer} ref={ref}>
      <button
        className={s.searchToggle}
        onClick={handleToggle}
        aria-label="Toggle search"
      >
        <img src={SearchIcon} alt="Search" />
      </button>

      <div className={getInputWrapperClass()}>
        <InputBase
          placeholder="Search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className={s.input}
        />
        {!isDesktop && (
          <button
            onClick={handleToggle}
            className={s.closeBtn}
            aria-label="Close"
          >
            <img src={CloseIcon} alt="Close" />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className={s.results}>
          {results.map(({ key, links }, i) =>
            Array.isArray(links)
              ? links.map((url, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={s.resultItem}
                    onClick={() => handleSelect(url)}
                  >
                    {key} ({j + 1})
                  </div>
                ))
              : links.trim() && (
                  <div
                    key={i}
                    className={s.resultItem}
                    onClick={() => handleSelect(links)}
                  >
                    {key}
                  </div>
                )
          )}
        </div>
      )}
    </div>
  );
}