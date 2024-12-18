import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Link as RouterLink } from "react-router-dom";
import { IconButton, MenuItem, makeStyles, Link } from "@material-ui/core";
import PropTypes from "prop-types";
import { useClickOutside } from "../../hooks/useClickOutside";
import keywords from "./keywords.json";
import SearchImage from "../../images/SearchIcon_Header.svg";
import CloseSearchIcon from "../../images/Header_icons/icon-close-search.svg";

const useStyles = makeStyles(() => ({
  wrapper: {
    position: "relative",
  },

  searchBarIcon: {
    pointerEvents: "none",
    position: "absolute",
    top: "20%",
    right: "30px",
    padding: 0,
    width: "10px",

    "&:focus": {
      outline: "none",
    },
  },

  searchBar: {
    marginRight: "42px",
    top: "37px",
    right: (props) => props.rightSearch,
    width: "272px",
    height: "46px",
    border: "1.2px solid #073762",
    position: "fixed",
    zIndex: 4,
    display: "flex",
    backgroundColor: "#fff",
    transitionDuration: "0.5s",

    "& input": {
      padding: "5px  16px",
      width: "100%",
      height: "100%",
      display: "block",
      boxSizing: "border-box",
      fontSize: "18px",
      fontFamily: "Josefin Sans",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0em",
      border: "none",

      "&:focus-visible": {
        outline: "none",
      },
    },

    "& button": {
      border: "none",
      margin: "0",
    },
    "@media @media (min-width: 320px) and (max-width: 599.99px)": {
      display: "none",
    },
    "@media (min-width: 600px) and (max-width: 1279.99px)": {
      marginRight: "25px !important",
      top: "18px !important",
      height: "46px",
    },
    "@media (min-width: 1280px) and (max-width: 2200px)": {
      top: "32px",
      marginRight: "30px !important",
    },
  },

  searchMobileBar: {
    display: "none",

    "& label": {
      margin: "0 35px 0 0",
      padding: "0 25px 10px 5px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid rgba(125 121 135 / 34%)",
      zIndex: "1",
    },

    "& input": {
      padding: "0 0 0 5px",
      width: "100%",
      height: "100%",
      display: "inline-block",
      boxSizing: "border-box",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0em",
      border: "none",
      backgroundColor: "transparent",

      "&:focus": {
        outline: "none",
      },

      "&::placeholder": {
        fontSize: "14px",
        fontWeight: 300,
      },
    },

    "& button": {
      border: "none",
      margin: "0",
    },

    "@media (max-width: 660px)": {
      padding: "20px 16px 21px",
      top: (props) => props.topSearch,
      right: "0",
      width: "100%",
      position: "fixed",
      display: "flex",
      alignItems: "center",
      border: "none",
      boxShadow: "inset 0 4px 15px rgba(0, 0, 0, 0.15)",
      zIndex: 2,
      backgroundColor: "#fff",
      transitionDuration: "0.3s",
    },
  },

  inputSearchIcon: {
    padding: "7px",
    height: "24px",
    width: "24px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",

    "&:focus": {
      outline: "none",
    },

    "& img": {
      height: "15px",
    },
  },

  inputCloseIcon: {
    padding: 0,
    height: "35px",
    width: "35px",
    backgroundColor: "transparent",
    cursor: "none",

    "&:focus": {
      outline: "none",
    },

    "& span": {
      height: "20px",
      width: "20px",
      aspectRatio: 1,
      display: "inline-flex",
      backgroundColor: "#04376f",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
    },

    "& img": {
      height: "10px",
    },
  },

  searchResultStyle: {
    top: "calc(100% + 2px)",
    right: "-2px",
    width: "calc(100% + 2px)",
    position: "absolute",
    background: "#fff",
    paddingTop: "5px",
    borderRadius: "5px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "15px 0 !important",
    maxHeight: "70vh",
    overflow: "auto",
    "& .link": {
      color: "#000 !important",
      "& :hover": {
        textDecoration: "none",
        background: "#073762",
        color: "#fff",
      },
    },
  },

  searchResultMobileStyle: {
    top: "99%",
    left: "0",
    width: "100%",
    position: "absolute",
    background: "#fff",
    paddingTop: "5px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "15px 0 !important",
    maxHeight: "70vh",
    overflow: "auto",
    "& .link": {
      color: "#000 !important",
      "& :hover": {
        textDecoration: "none",
        background: "#073762",
        color: "#fff",
      },
    },
  },
}));

function SearchResult({ pageUrl, text }) {
  const Component = pageUrl.includes("http") ? Link : RouterLink;

  return (
    <Link
      className="link"
      component={Component}
      href={pageUrl}
      to={pageUrl}
      target="_blank"
    >
      <MenuItem>{text}</MenuItem>
    </Link>
  );
}

SearchResult.propTypes = {
  pageUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Search(props) {
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1279.99 });
  const {
    searchInput,
    searchResult,
    setSearchInput,
    setSearchResult,
    showSearchInputHandler,
    setHasSearchbar,
  } = {
    ...props,
  };

  const {
    wrapper,
    searchBar,
    searchResultStyle,
    searchBarIcon,
    searchMobileBar,
    inputSearchIcon,
    inputCloseIcon,
    searchResultMobileStyle,
  } = useStyles(props);

  const searchFor = () => {
    if (searchInput.length < 3) {
      setSearchResult("please write a complete \n word");
      return;
    }

    const searchInputToUpperCase = searchInput.toUpperCase();
    const seperatedWords = searchInputToUpperCase.split(" ");
    const identicalResult = [];
    const almosTheSame = [];
    const containsSomeKeywords = [];
    let FsearcshResult = [];

    Object.keys(keywords).forEach((keyword) => {
      const keywordToUpperCase = keyword.toUpperCase();
      if (keywordToUpperCase === searchInputToUpperCase) {
        identicalResult.push(keyword);

        return true;
      }

      if (
        searchInputToUpperCase.includes(keywordToUpperCase) ||
        keywordToUpperCase.includes(searchInputToUpperCase)
      ) {
        almosTheSame.push(keyword);

        return true;
      }

      for (let index = 0; index < seperatedWords.length; index++) {
        if (
          seperatedWords[index].includes(keywordToUpperCase) ||
          keywordToUpperCase.includes(seperatedWords[index])
        ) {
          containsSomeKeywords.push(keyword);

          return true;
        }
      }

      return false;
    });

    if (identicalResult.length > 0) {
      FsearcshResult = identicalResult;
    } else if (almosTheSame.length > 0) {
      FsearcshResult = almosTheSame;
    } else if (containsSomeKeywords.length > 0) {
      FsearcshResult = containsSomeKeywords;
    } else {
      FsearcshResult = "Not Found";
    }

    setSearchResult(FsearcshResult);
  };

  const searchRef = useRef(null);

  const closeSearchbar = (e) => {
    e?.preventDefault();
    showSearchInputHandler("-200%");

    setTimeout(() => {
      setHasSearchbar(false);
    }, 400);
  };

  useClickOutside(searchRef, () => {
    closeSearchbar();
  });

  const userDeviceWidth = window.innerWidth;
  const mobileBreakpoint = 600;

  const isDesktopSearchbarVisible = userDeviceWidth > mobileBreakpoint;

  return (
    <div className={wrapper}>
      {isDesktopSearchbarVisible && (
        <form className={searchBar} id="searchBar" ref={searchRef}>
          <input
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder="SEARCH"
            value={searchInput}
          />

          <IconButton
            onClick={(e) => {
              e.preventDefault();
              searchFor();
            }}
            type="submit"
            className={searchBarIcon}
            color="inherit"
            aria-label="menu"
          >
            <img
              src={SearchImage}
              alt="SearchIcon"
              width={isTablet ? "25px" : "30"}
              height={isTablet ? "25px" : "30"}
            />
          </IconButton>

          {!!searchResult.length && (
            <div className={searchResultStyle}>
              {Array.isArray(searchResult) ? (
                searchResult.map((item, i) => {
                  if (Array.isArray(keywords[item]))
                    return keywords[item].map((link, index) => {
                      return (
                        <SearchResult
                          pageUrl={link}
                          key={index}
                          text={item + " : " + ++index}
                        />
                      );
                    });
                  return (
                    <SearchResult
                      pageUrl={keywords[item]}
                      text={item}
                      key={i}
                    />
                  );
                })
              ) : (
                <>{searchResult}</>
              )}
            </div>
          )}
        </form>
      )}

      {!isDesktopSearchbarVisible && (
        <form className={searchMobileBar} id="searchMobileBar" ref={searchRef}>
          <label>
            <button
              onClick={(e) => {
                e.preventDefault();
                searchFor();
              }}
              type="submit"
              className={inputSearchIcon}
              color="inherit"
              aria-label="menu"
            >
              <img src={SearchImage} alt="SearchIcon" />
            </button>

            <input
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              placeholder="SEARCH"
              value={searchInput}
            />
          </label>

          <button
            onClick={closeSearchbar}
            type="button"
            className={inputCloseIcon}
            color="inherit"
            aria-label="menu"
          >
            <span>
              <img src={CloseSearchIcon} alt="CloseSearchIcon" />
            </span>
          </button>

          {!!searchResult.length && (
            <div className={searchResultMobileStyle}>
              {Array.isArray(searchResult) ? (
                searchResult.map((item, i) => {
                  if (Array.isArray(keywords[item]))
                    return keywords[item].map((link, index) => {
                      return (
                        <SearchResult
                          pageUrl={link}
                          key={index}
                          text={item + " : " + ++index}
                        />
                      );
                    });
                  return (
                    <SearchResult
                      pageUrl={keywords[item]}
                      text={item}
                      key={i}
                    />
                  );
                })
              ) : (
                <>{searchResult}</>
              )}
            </div>
          )}
        </form>
      )}
    </div>
  );
}

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  searchResult: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    .isRequired,
  setSearchInput: PropTypes.func.isRequired,
  setSearchResult: PropTypes.func.isRequired,
  showSearchInputHandler: PropTypes.func.isRequired,
  setHasSearchbar: PropTypes.func.isRequired,
};
