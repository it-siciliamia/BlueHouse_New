import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SideNavbar from "../SideNavbar/SideNavbar";
import SideNavbarMobile from "../SideNavbar/SideNavbarMobile";
import Button from "../Shared/Button/Button";
import Search from "./search";
import MenuIcon from "../../images/MenuIcon_Header.svg";
import SearchIcon from "../../images/SearchIcon_Header.svg";
import logo from "../../images/logoBlue.png";
import { useHeaderSize } from "../../components/helpers/HeaderContext/HeaderContext";
import s from "./Header.module.scss";

const userDeviceWidth = window.innerWidth;
const mobileBreakpoint = 600;

export default function Header({ right, setRight, top, setTop }) {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1279.99 });
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });
  const { width } = useHeaderSize();

  const [rightSearch, setRightSearch] = useState("-200%");
  const [topSearch, setTopSearch] = useState("-200%");

  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchTop = "75px";

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

      <header className={s.headerContainer}>
        <div id="header" className={s.header}>
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              color: "violet",
              fontWeight: "700",
            }}
          >
            {width}
          </span>
          <div>
            <Link to="/" className={s.logo} color="inherit" aria-label="logo">
              <img src={logo} alt="logo" className={s.imgLogo} />
            </Link>
          </div>

          {(isDesktop || isLaptop) && (
            <div className={s.bookingButtonsWrapper}>
              <a
                href="https://beds24.com/booking2.php?propid=3578&layout=1"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  text="BOOK YOUR ROOM"
                  btnClass="btnDark"
                  width={isLaptop ? "240px" : "280px"}
                />
              </a>
              <a
                href="https://bluehouse.tourdesk.is/Tour"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  text="BOOK DAY TOUR"
                  btnClass="btnLight"
                  width={isLaptop ? "240px" : "280px"}
                />
              </a>
            </div>
          )}

          <div className={s.rightPart}>
            <button
              className={s.menuIcon}
              onClick={() => handleShowSearchInput(isMobile ? searchTop : 0)}
              aria-label="menu"
            >
              <img
                src={SearchIcon}
                alt="SearchIcon"
                width={isTablet || isMobile ? "25px" : "30"}
                height={isTablet || isMobile ? "25px" : "30"}
              />
            </button>

            <button
              className={s.menuIcon}
              onClick={() => handleOpenAndCloseSideNavbar(0)}
              aria-label="menu"
            >
              <img
                src={MenuIcon}
                alt="MenuIcon"
                width={isTablet || isMobile ? "30px" : "40"}
                height={isTablet || isMobile ? "25px" : "30"}
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
