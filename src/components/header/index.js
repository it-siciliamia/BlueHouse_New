import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { WithTransLate } from "../../translating/index";
import SideNavbar from "../SideNavbar";
import SideNavbarMobile from "../SideNavbarMobile";
import Search from "./search";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "../../images/MenuIcon_Header.png";
import SearchIcon from "../../images/SearchIcon_Header.png";
import logo from "../../images/logoBlue.png";
import menu from "../../images/Header_icons/Menu_header_mobileview.svg";

const userDeviceWidth = window.innerWidth;
const mobileBreakpoint = 600;

const headerStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding:'20px 115px',
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: 3,
    backgroundColor: "white",
    
  },

  atag: {
    padding: "27px 30px",
  },

  atag2: {
    padding: "27px 16px",
  },

  bookingButtonsWrapper: {
    marginRight: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "Center",
    width: "700px",
  },

  column3: {
    gap: "10px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "@media only screen and (min-device-width: 768px) and (max-device-width: 1024px)":
    {
      root: {
        marginTop: "0px",
      },
      column3: {
        marginRight: "10px",
      },
    },

  bookingButtons: {
    border: "1px solid #14202B",
    width: "280px !important" ,
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "Josefin Sans",
    fontSize: "16px",
    lineHeight: "20px",
    textAlign: "center",
    display: "block",
    height: "46px",
    padding: "14px",
    "&:hover": {
      background: "#04376F",
    },
    [theme.breakpoints.down("md")]: {
      width: "270px",
      height: "60px",
      marginLeft: "60px",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  bookingRoom: {
    backgroundColor: "#3B5998",
    marginRight: "52px",
    color: "#fff",
    "&:hover": {
      color: "#073762",
      backgroundColor:'#fff'
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "-22px",
    },
  },

  bookingTour: {
    background: "#fff",
    color: "#073762",
    "&:hover": {
      color: "#fff",
      backgroundColor:'#3B5598'
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "-82px",
    },
  },

  button3: {
    background: "transparent",
    border: "none",
    width: "31px",
    height: "31px",
    "@media(max-width:426px)": {
      width: "10vw",
    },

    "&:focus": {
      outline: "none",
    },
  },

  button5: {
    background: "transparent",
    border: "none",
    outline: "0",
  },

  button4: {
    background: "transparent",
    border: "none",
    outline: "0",
  },

  button6: {
    background: "transparent",
    border: "none",
    outline: "0",
  },

  column4: {
    position: "fixed",
    backgroundColor: "#fff",
    top: "0px",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    height: "65px",
    flexBasis: "100%",
    padding: "0 25px",
    zIndex: 3,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    justifyContent: "space-between",
  },

  mobileColumn: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "20px",
    },
  },

  leftNav: {
    display: "flex",
    gap: "20px",
  },

  menuIcon: {
    marginRight: "10px",
    backgroundColor: "transparent",
    border:'none',
    outline:'none',

    "&:focus": {
      outline: "none",
    },
  },

  logo: {
    // marginLeft: "1.3vw",
    width: "0px",
    height: "0px",
    marginTop: "-70px",
  },

  imgLogo: {
    width: "11rem",
    marginTop: "10px",
  },

  "@media (max-width:600px)": {
    root: {
      display: "none",
    },

    bookingButtonsWrapper: {
      display: "none",
    },

    column3: {
      marginRight: "100px",
      display: "none",
    },

    logo: {
      marginLeft: "0vw",
      display: "block",
      pointerEvents: "none",
    },

    imgLogo: {
      width: "8rem",
      marginTop: "10px",
    },
  },

  "@media (min-width:601px)": {
    column4: {
      display: "none",
    },
  },

  [theme.breakpoints.down("sm")]: {
    bookingButtons: {
      fontSize: "14px",
      padding: "16px 0",
      width: "164px",
    },

    search: {
      padding: "0px",

      "&:focus": {
        outline: "none",
      },

      "& img": {
        "@media (max-width:660px)": {
          width: "20px",
        },
      },
    },

    menuIcon: {
      marginRight: "5px",

      "& img": {
        width: "30px",
      },
    },

    searchBar: {
      height: "50px",

      "& input": {
        fontSize: "14px",
      },
    },
  },
}));

export default function Header({ right, setRight, top, setTop }) {
  const classes = headerStyles();

  const [rightSearch, setRightSearch] = useState("-200%");
  const [topSearch, setTopSearch] = useState("-200%");

  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleToggleSideNavbarDesktop = (rightValue) => {
    setRight(rightValue);
  };

  const handleToggleSideNavbarMobile = (topValue) => {
    setTop(topValue);
  };

  const handleOpenAndCloseSideNavbar =
    userDeviceWidth > mobileBreakpoint
      ? handleToggleSideNavbarDesktop
      : handleToggleSideNavbarMobile;

  const searchTop = "65px";

  const navBar =
    userDeviceWidth > mobileBreakpoint ? (
      <SideNavbar
        right={right}
        handleOpenAndCloseSideNavbar={handleOpenAndCloseSideNavbar}
      />
    ) : (
      <SideNavbarMobile
        top={top}
        handleOpenAndCloseSideNavbar={handleOpenAndCloseSideNavbar}
      />
    );

  const [hasSearchbar, setHasSearchbar] = useState(false);

  const handleShowSearchInput = (value) => {
    setHasSearchbar(true);

    setTimeout(() => {
      setRightSearch(value);
      setTopSearch(value);

      if (searchInput) {
        setSearchInput("");
        setSearchResult([]);
      }
    }, 1);
  };

  return (
    <>
      {navBar}

      {hasSearchbar && (
        <Search
          setHasSearchbar={setHasSearchbar}
          rightSearch={rightSearch}
          topSearch={topSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          showSearchInputHandler={handleShowSearchInput}
        />
      )}

      <Grid container>
        <Grid item xs={1} sm={12} className={classes.root}>
          <div>
            <Link
              to="/"
              className={classes.logo}
              color="inherit"
              aria-label="logo"
            >
              <img src={logo} alt="logo" className={classes.imgLogo} />
            </Link>
          </div>

          <div className={classes.bookingButtonsWrapper}>
            <a
              className={clsx(classes.bookingRoom, classes.bookingButtons)}
              href="https://beds24.com/booking2.php?propid=3578&layout=1"
              target="_blank"
              rel="noreferrer"
            >
              <WithTransLate text="main page" />
            </a>

            <a
              className={clsx(classes.bookingTour, classes.bookingButtons)}
              href="https://bluehouse.tourdesk.is/Tour"
              target="_blank"
              rel="noreferrer"
            >
              <WithTransLate text="book day tour" />
            </a>
          </div>

          <div className={classes.column3}>
            <button
              className={classes.menuIcon}
              onClick={() => handleShowSearchInput(0)}
              aria-label="menu"
            >
              <img src={SearchIcon} alt="SearchIcon" />
            </button>

            <button
              className={classes.menuIcon}
              onClick={() => handleOpenAndCloseSideNavbar(0)}
              aria-label="menu"
            >
              <img src={MenuIcon} alt="MenuIcon" />
            </button>
          </div>
        </Grid>

        <Grid
          container
          xs={10}
          sm={1}
          item
          className={classes.column4}
          justifyContent="space-between"
        >
          <Link
            to="/"
            className={classes.logo}
            color="inherit"
            aria-label="logo"
          >
            <img src={logo} alt="logo" className={classes.imgLogo} />
          </Link>

          <div className={classes.mobilecolumn}>
            <button
              className={`${classes.button3} ${classes.search}`}
              onClick={() => handleShowSearchInput(searchTop)}
              color="inherit"
              aria-label="menu"
              disabled={hasSearchbar}
            >
              <img src={SearchIcon} alt="SearchIcon" />
            </button>

            <button
              className={classes.button3}
              onClick={() => handleOpenAndCloseSideNavbar(0)}
              color="inherit"
              aria-label="menu"
            >
              <img src={menu} alt="side nav bar " />
            </button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
