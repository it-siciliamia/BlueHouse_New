import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { InputBase } from "@material-ui/core";
import useBreakpoints from "../../Styles/useBreakpointsNew";
import SearchIcon from "../../images/SearchIcon_Header.svg";
import CloseIcon from "../../images/close-white.svg";
import keywords from "./keywords.json";
import s from "../../components/header/search.module.scss";

export default function Search({ onSearchToggle }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const ref = useRef();
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

  const closeSearch = useCallback(() => {
    setOpen(false);
    setQuery("");
    setResults([]);
    if (onSearchToggle) onSearchToggle(false);
  }, [onSearchToggle]);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (onSearchToggle) {
      onSearchToggle(open);
    }
    if (!open) {
      setQuery("");
      setResults([]);
    }
  }, [open, onSearchToggle]);

  // Close search when clicking outside
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeSearch();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open, closeSearch]);

  const inputWrapperClass = useMemo(() => {
    const baseClass = isDesktop ? s.inputWrapperDesktop : s.inputWrapperMobile;
    return open ? `${baseClass} ${s.active}` : baseClass;
  }, [isDesktop, open]);

  return (
    <div className={s.searchContainer} ref={ref}>
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
          <button
            onClick={handleToggle}
            className={s.closeBtn}
            aria-label="Close search"
          >
            <img src={CloseIcon} alt="Close" />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
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
