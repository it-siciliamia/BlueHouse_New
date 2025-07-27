// ✅ Search.js
import React, { useState, useRef, useEffect } from "react";
import { InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useClickOutside } from "../../hooks/useClickOutside";
import SearchIcon from "../../images/SearchIcon_Header.svg";
import CloseIcon from "../../images/close-white.svg";
import keywords from "./keywords.json";

const useStyles = makeStyles(() => ({
  searchContainer: {
    position: "relative",
    zIndex: 2000,
  },
  searchToggle: {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    "& img": {
      width: "28px",
      height: "28px",
    },
  },
  // DESKTOP STYLE (>=1280px)
  inputWrapperDesktop: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "4px",
    height: "46px",
    width: "0",
    overflow: "hidden",
    transition: "width 0.4s ease-in-out", // Slower, smoother transition
    position: "absolute",
    right: "50px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2001,
    border: "none",
    "&.active": {
      border: "1.2px solid #073762",
      "@media (min-width: 1280px) and (max-width: 1344px)": {
        width: "200px", // Reduced width for narrow range
      },
      "@media (min-width: 1345px)": {
        width: "260px", // Reduced width for large screens
      },
    },
  },
  // MOBILE STYLE (<1280px) for various devices
  inputWrapperMobile: {
    display: "none",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
    padding: "8px 10px",
    zIndex: 1000,
    transition: "all 0.3s ease",
    "@media (max-width: 1279px)": {
      position: "fixed",
      top: "78px",
      left: "clamp(16px, 6vw, 40px)",
      right: "clamp(16px, 6vw, 40px)",
      width: "auto",
      display: "none",
      "&.active": {
        display: "flex",
      },
    },
    // 🔽 Nest Hub (1024x600)
    "@media (max-width: 1025px) and (min-height: 599px)": {
      left: "10vw",
      right: "10vw",
    },
    // 🔽 Surface Pro 7 (912x1368) and iPad Pro (1024x1366)
    "@media (max-width: 913px) and (min-height: 1367px)": {
      left: "10vw",
      right: "10vw",
    },
    // 🔽 Specific fix for iPad Pro 12.9"
    "@media (width: 1024px) and (height: 1366px)": {
      left: "10vw",
      right: "10vw",
    },
  },
  input: {
    flex: 1,
    fontSize: "15px",
    fontFamily: "Josefin Sans",
    border: "none",
    outline: "none",
    padding: "4px 10px",
  },
  closeBtn: {
    background: "none",
    border: "none",
    padding: 0,
    marginLeft: "8px",
    cursor: "pointer",
    "& img": {
      width: "20px",
      height: "20px",
    },
  },
  results: {
    maxHeight: "300px",
    overflowY: "auto",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
    zIndex: 1000,
    "@media (max-width: 1279px)": {
      position: "fixed",
      top: "118px",
      left: "clamp(16px, 6vw, 40px)",
      right: "clamp(16px, 6vw, 40px)",
      width: "auto",
    },
    // 🔽 Nest Hub (1024x600)
    "@media (max-width: 1025px) and (min-height: 599px)": {
      left: "10vw",
      right: "10vw",
    },
    // 🔽 Surface Pro 7 (912x1368) and iPad Pro (1024x1366)
    "@media (max-width: 913px) and (min-height: 1367px)": {
      left: "10vw",
      right: "10vw",
    },
    "@media (width: 1024px) and (height: 1366px)": {
      left: "10vw",
      right: "10vw",
    },
  },
  resultItem: {
    padding: "10px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
}));

export default function Search({ onSearchToggle }) {
  const classes = useStyles();
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
      return `${classes.inputWrapperDesktop} ${open ? "active" : ""}`;
    } else {
      return `${classes.inputWrapperMobile} ${open ? "active" : ""}`;
    }
  };

  return (
    <div className={classes.searchContainer} ref={ref}>
      <button
        className={classes.searchToggle}
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
          className={classes.input}
        />
        {!isDesktop && (
          <button
            onClick={handleToggle}
            className={classes.closeBtn}
            aria-label="Close"
          >
            <img src={CloseIcon} alt="Close" />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className={classes.results}>
          {results.map(({ key, links }, i) =>
            Array.isArray(links)
              ? links.map((url, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={classes.resultItem}
                    onClick={() => handleSelect(url)}
                  >
                    {key} ({j + 1})
                  </div>
                ))
              : links.trim() && (
                  <div
                    key={i}
                    className={classes.resultItem}
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