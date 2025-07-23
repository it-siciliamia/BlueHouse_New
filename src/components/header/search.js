import React, { useState, useRef } from "react";
import { InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useClickOutside } from "../../hooks/useClickOutside";
import SearchIcon from "../../images/SearchIcon_Header.svg";
import keywords from "./keywords.json";

const useStyles = makeStyles(() => ({
  searchContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  searchToggle: {
    background: "none",
    border: "none",
    padding: 0,
    marginRight: "10px",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
    "& img": {
      width: "30px",
      height: "30px",
    },
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "4px",
    height: "46px",
    width: "0",
    overflow: "hidden",
    transition: "width 0.3s ease",
    position: "absolute",
    right: "50px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 999,
    border: "none",
    "&.active": {
      width: "270px",
      border: "1.2px solid #073762",
    },
  },
  input: {
    padding: "0 12px",
    flex: 1,
    fontSize: "16px",
    border: "none",
    outline: "none",
    fontFamily: "Josefin Sans",
  },
  results: {
    position: "absolute",
    top: "calc(100% + 10px)",
    right: "0",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    zIndex: 1000,
    minWidth: "270px",
    maxHeight: "300px",
    overflowY: "auto",
  },
  resultItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
}));

export default function Search() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const ref = useRef();

  useClickOutside(ref, () => {
    setOpen(false);
    setResults([]);
  });

  const handleSearch = (value) => {
    setQuery(value);
    if (!value) {
      setResults([]);
      return;
    }

    const lower = value.toLowerCase();
    const matches = Object.entries(keywords)
      .filter(([key]) => key.toLowerCase().includes(lower))
      .map(([key, links]) => ({ key, links }));

    setResults(matches);
  };

  const handleSelect = (url) => {
    if (typeof url === "string" && url.startsWith("http")) {
      window.open(url, "_blank");
    } else if (typeof url === "string") {
      window.location.href = url;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && results.length > 0) {
      const first = results[0].links;
      if (typeof first === "string") {
        handleSelect(first);
      } else if (Array.isArray(first) && first.length > 0) {
        handleSelect(first[0]);
      }
    }
  };

  return (
    <div className={classes.searchContainer} ref={ref}>
      <button
        className={classes.searchToggle}
        onClick={() => {
          if (open) {
            setQuery("");
            setResults([]);
          }
          setOpen(!open);
        }}
        aria-label="search"
      >
        <img src={SearchIcon} alt="search" />
      </button>

      <div className={`${classes.inputWrapper} ${open ? "active" : ""}`}>
        <InputBase
          placeholder="Search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className={classes.input}
        />
      </div>

      {results.length > 0 && open && (
        <div className={classes.results}>
          {results.map(({ key, links }, index) => {
            if (Array.isArray(links)) {
              return links.map((url, i) => (
                <div
                  key={`${index}-${i}`}
                  className={classes.resultItem}
                  onClick={() => handleSelect(url)}
                >
                  {key} ({i + 1})
                </div>
              ));
            } else if (typeof links === "string" && links.trim()) {
              return (
                <div
                  key={index}
                  className={classes.resultItem}
                  onClick={() => handleSelect(links)}
                >
                  {key}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
}
