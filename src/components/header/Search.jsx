import InputBase from "@mui/material/InputBase";
import PropTypes from "prop-types";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";

import keywords from "./keywords.json";
import s from "../../components/header/search.module.scss";
import CloseIcon from "../../images/close-white.svg";
import SearchIcon from "../../images/SearchIcon_Header.svg";
import useBreakpoints from "../../Styles/useBreakpointsNew.js";

export default function Search({ onSearchToggle }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const containerRef = useRef(null);
  const { isDesktop } = useBreakpoints();

  const handleSearch = useCallback((value) => {
    setQuery(value);

    if (!value) {
      setResults([]);
      return;
    }

    const matches = Object.entries(keywords)
      .filter(([key]) => key.toLowerCase().includes(value.toLowerCase()))
      .map(([key, links]) => ({ key, links }));

    setResults(matches);
  }, []);

  const handleSelect = useCallback((url) => {
    if (typeof url === "string") {
      if (url.startsWith("http")) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    }
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && results.length > 0) {
        const first = results[0].links;
        if (typeof first === "string") {
          handleSelect(first);
        } else if (Array.isArray(first) && first[0]) {
          handleSelect(first[0]);
        }
      }
    },
    [results, handleSelect]
  );

  // Close search (used by close button in the mobile version)
  const closeSearch = useCallback(() => {
    setOpen(false);
    setQuery("");
    setResults([]);
  }, []);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  // Handle `open` state
  useEffect(() => {
    onSearchToggle?.(open);

    if (!open) {
      // Clear search state when closing
      setQuery("");
      setResults([]);
      return;
    }

    // Setup listeners when opening
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    // Cleanup listeners
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [open, onSearchToggle]);

  const inputWrapperClass = useMemo(() => {
    const baseClass = isDesktop ? s.inputWrapperDesktop : s.inputWrapperMobile;
    return open ? `${baseClass} ${s.active}` : baseClass;
  }, [isDesktop, open]);

  return (
    <div className={s.searchContainer} ref={containerRef}>
      <button
        className={s.searchToggle}
        onClick={handleToggle}
        aria-label="Toggle search"
        aria-expanded={open}
      >
        <img src={SearchIcon} alt="Search" />
      </button>

      <div className={inputWrapperClass}>
        <InputBase
          placeholder="SEARCH"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className={s.input}
          aria-label="Search input"
        />

        {!isDesktop && (
          <button onClick={closeSearch} className={s.closeBtn} aria-label="Close search">
            <img src={CloseIcon} alt="Close" />
          </button>
        )}
      </div>

      {!!open && results.length > 0 && (
        <div className={s.results} role="listbox">
          {results.map(({ key, links }, i) =>
            Array.isArray(links)
              ? links.map((url, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={s.resultItem}
                    onClick={() => handleSelect(url)}
                    role="option"
                    tabIndex={0}
                  >
                    {key} ({j + 1})
                  </div>
                ))
              : links.trim() && (
                  <div
                    key={i}
                    className={s.resultItem}
                    onClick={() => handleSelect(links)}
                    role="option"
                    tabIndex={0}
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

Search.propTypes = {
  onSearchToggle: PropTypes.func,
};
