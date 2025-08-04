import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useBreakpoints from "../../Styles/useBreakpoints";
import SideNavbar from "../SideNavbar/SideNavbar";
import SideNavbarMobile from "../SideNavbar/SideNavbarMobile";
import Button from "../Shared/Button/Button";
import logo from "../../images/logo.svg";
import MenuIcon from "../../images/MenuIcon_Header.svg";
import Search from "./search";

import ProcessPaymentPanel from "../PaymentComponent/ProcessPaymentPanel/ProcessPaymentPanel";
import s from "./Header.module.scss";

const userDeviceWidth = window.innerWidth;
const mobileBreakpoint = 600;

export default function Header({ right, setRight, top, setTop }) {
  const { isMobile, isTablet, isLaptop, isDesktop } = useBreakpoints();
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Callback to handle search state changes
  const handleSearchToggle = (searchOpen) => {
    setIsSearchOpen(searchOpen);
    
    const buttonWrapper = document.querySelector(`.${s.bookingButtonsWrapper}`);
    if (!buttonWrapper) return;

    if (searchOpen && windowWidth >= 1280) {
      // Calculate offset for ALL desktop sizes to prevent overlap
      let offset = 0;
      if (windowWidth <= 1485) {
        // Progressive offset from 1485px down to 1280px
        if (windowWidth >= 1400) {
          // 1485px to 1400px: gentle start -20px to -50px
          offset = -20 - ((1485 - windowWidth) * 0.35);
        } else if (windowWidth >= 1344) {
          // 1400px to 1344px: moderate -50px to -80px
          offset = -50 - ((1400 - windowWidth) * 0.54);
        } else if (windowWidth >= 1300) {
          // 1344px to 1300px: more aggressive -80px to -110px
          offset = -80 - ((1344 - windowWidth) * 0.68);
        } else {
          // 1300px to 1280px: careful approach to avoid logo overlap -110px to -120px
          offset = -110 - ((1300 - windowWidth) * 0.5);
        }
        offset = Math.max(offset, -120); // Cap at -120px to avoid logo overlap
      }
      buttonWrapper.style.setProperty('--button-offset', `${offset}px`);
    } else {
      // Always reset offset when search is closed
      buttonWrapper.style.setProperty('--button-offset', '0px');
    }
  };

  // Update offset when window size changes, only if search is open
  useEffect(() => {
    const buttonWrapper = document.querySelector(`.${s.bookingButtonsWrapper}`);
    if (!buttonWrapper) return;

    if (isSearchOpen && windowWidth >= 1280) {
      // Only if search is open and we're on desktop - same logic as handleSearchToggle
      let offset = 0;
      if (windowWidth <= 1485) {
        if (windowWidth >= 1400) {
          offset = -20 - ((1485 - windowWidth) * 0.35);
        } else if (windowWidth >= 1344) {
          offset = -50 - ((1400 - windowWidth) * 0.54);
        } else if (windowWidth >= 1300) {
          offset = -80 - ((1344 - windowWidth) * 0.68);
        } else {
          offset = -110 - ((1300 - windowWidth) * 0.5);
        }
        offset = Math.max(offset, -120);
      }
      buttonWrapper.style.setProperty('--button-offset', `${offset}px`);
    } else {
      // If search is closed or not on desktop - reset offset
      buttonWrapper.style.setProperty('--button-offset', '0px');
    }
  }, [windowWidth, isSearchOpen]);

  // Determine whether to show buttons and how to style them
  const shouldShowButtons = (isDesktop || isLaptop || (windowWidth >= 960 && windowWidth <= 1279));
  const isDesktopRange = windowWidth >= 1280;

  return (
    <>
      {navBar}

      <header className={s.headerContainer}>
        <div id="header" className={s.header}>
          <img
            src={logo}
            alt="logo"
            className={s.logoImage}
            onClick={() => (window.location.href = "/")}
          />

          {shouldShowButtons && (
            <div
              className={`${s.bookingButtonsWrapper} ${isDesktopRange && isSearchOpen ? s.searchActive : ''}`}
              style={{
                gap:
                  windowWidth < 1030 && windowWidth >= 960
                    ? "16px"
                    : "40px",
                marginLeft:
                  windowWidth < 1030 && windowWidth >= 960
                    ? "auto"
                    : "0",
                marginRight:
                  windowWidth < 1030 && windowWidth >= 960
                    ? "auto"
                    : "0",
                transition: "gap 0.3s ease-in-out, margin 0.3s ease-in-out, transform 0.3s ease-in-out"
              }}
            >
              {location.pathname === "/payment" ? (
                <ProcessPaymentPanel />
              ) : (
                <>
                  <a href="/" rel="noreferrer">
                    <Button
                      text="MAIN PAGE"
                      btnClass="btnDark"
                      width={
                        isDesktopRange && isSearchOpen && windowWidth >= 1280 && windowWidth <= 1344
                          ? "180px"
                          : windowWidth < 1000 && windowWidth >= 960
                          ? "180px"
                          : isLaptop
                          ? "220px"
                          : "260px"
                      }
                      color="#1D3967"
                    />
                  </a>
                  <a
                    href="https://bluehouse.tourdesk.is/Tour"
                    target="_blank"
                    rel="noreferrer"
                    className={`${isDesktopRange ? s.bookTourButton : ''}`}
                  >
                    <Button
                      text="BOOK DAY TOUR"
                      btnClass="btnLight"
                      width={
                        windowWidth < 1000 && windowWidth >= 960
                          ? "180px"
                          : isLaptop
                          ? "220px"
                          : "260px"
                      }
                    />
                  </a>
                </>
              )}
            </div>
          )}

          <div className={s.rightPart}>
            <Search onSearchToggle={handleSearchToggle} />

            <button
              className={s.menuIcon}
              type="button"
              tabIndex={-1}
              onClick={() => handleOpenAndCloseSideNavbar(0)}
              aria-label="menu"
            >
              <img
                src={MenuIcon}
                alt="MenuIcon"
                width={isTablet || isMobile ? "30px" : "40"}
                height={isTablet || isMobile ? "25px" : "30"}
                draggable="false"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Container that shifts down when search is open */}
      <div id="searchShiftTarget"></div>
    </>
  );
}