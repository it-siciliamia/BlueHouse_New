import React, { useState, useEffect, useRef } from "react";
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
  const isHandset = isMobile || isTablet; // mobile & tablet behavior
  const location = useLocation();

  // UI state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Hide/show state
  const [isHidden, setIsHidden] = useState(false);
  const lastYRef = useRef(0);
  const rafId = useRef(0);

  // Keep window width updated
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // SideNav toggles (unchanged)
  const handleToggleSideNavbarDesktop = (rightValue) => setRight(rightValue);
  const handleToggleSideNavbarMobile = (topValue) => setTop(topValue);
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

  // Search open/close effects (unchanged)
  const handleSearchToggle = (searchOpen) => {
    setIsSearchOpen(searchOpen);
    const buttonWrapper = document.querySelector(`.${s.bookingButtonsWrapper}`);
    if (!buttonWrapper) return;

    if (searchOpen && windowWidth >= 1280) {
      let offset = 0;
      if (windowWidth <= 1485) {
        if (windowWidth >= 1400) {
          offset = -20 - (1485 - windowWidth) * 0.35;
        } else if (windowWidth >= 1344) {
          offset = -50 - (1400 - windowWidth) * 0.54;
        } else if (windowWidth >= 1300) {
          offset = -80 - (1344 - windowWidth) * 0.68;
        } else {
          offset = -110 - (1300 - windowWidth) * 0.5;
        }
        offset = Math.max(offset, -120);
      }
      buttonWrapper.style.setProperty("--button-offset", `${offset}px`);
    } else {
      buttonWrapper.style.setProperty("--button-offset", "0px");
    }
  };

  useEffect(() => {
    const buttonWrapper = document.querySelector(`.${s.bookingButtonsWrapper}`);
    if (!buttonWrapper) return;

    if (isSearchOpen && windowWidth >= 1280) {
      let offset = 0;
      if (windowWidth <= 1485) {
        if (windowWidth >= 1400) {
          offset = -20 - (1485 - windowWidth) * 0.35;
        } else if (windowWidth >= 1344) {
          offset = -50 - (1400 - windowWidth) * 0.54;
        } else if (windowWidth >= 1300) {
          offset = -80 - (1344 - windowWidth) * 0.68;
        } else {
          offset = -110 - (1300 - windowWidth) * 0.5;
        }
        offset = Math.max(offset, -120);
      }
      buttonWrapper.style.setProperty("--button-offset", `${offset}px`);
    } else {
      buttonWrapper.style.setProperty("--button-offset", "0px");
    }
  }, [windowWidth, isSearchOpen]);

  const shouldShowButtons =
    isDesktop || isLaptop || (windowWidth >= 960 && windowWidth <= 1279);
  const isDesktopRange = windowWidth >= 1280;

  // === Hide/show logic ===
  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (isSearchOpen) {
          // If search is open, keep header visible
          setIsHidden(false);
          lastYRef.current = window.scrollY || 0;
          return;
        }

        const y = window.scrollY || 0;

        if (isHandset) {
          // Mobile/tablet: hide on down, show on up or at top
          const diff = y - lastYRef.current;
          const DOWN_DELTA = 5;
          const UP_DELTA = -5;

          if (y <= 0) {
            setIsHidden(false); // at top always visible
          } else if (diff > DOWN_DELTA) {
            setIsHidden(true); // scrolling down -> hide
          } else if (diff < UP_DELTA) {
            setIsHidden(false); // scrolling up -> show
          }
          lastYRef.current = y;
        } else {
          // Desktop/laptop: visible only at the very top
          setIsHidden(y > 0);
        }
      });
    };

    // init on mount
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHandset, isSearchOpen]);

  return (
    <>
      {navBar}

      {/* Animate WHOLE header so translucent bg hides with it */}
      <header
        className={s.headerContainer}
        style={{
          transform: isHidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.35s ease",
          willChange: "transform",
        }}
      >
        <div id="header" className={s.header}>
          <img
            src={logo}
            alt="logo"
            className={s.logoImage}
            onClick={() => (window.location.href = "/")}
          />

          {shouldShowButtons && (
            <div
              className={`${s.bookingButtonsWrapper} ${
                isDesktopRange && isSearchOpen ? s.searchActive : ""
              }`}
              style={{
                gap:
                  windowWidth < 1030 && windowWidth >= 960 ? "16px" : "30px",
                marginLeft:
                  windowWidth < 1030 && windowWidth >= 960 ? "auto" : "0",
                marginRight:
                  windowWidth < 1030 && windowWidth >= 960 ? "auto" : "0",
                transition:
                  "gap 0.3s ease-in-out, margin 0.3s ease-in-out, transform 0.3s ease-in-out",
              }}
            >
              {location.pathname === "/payment" ? (
                <ProcessPaymentPanel />
              ) : (
                <>
                  <a
                    href="https://beds24.com/booking2.php?propid=3578&layout=1&_gl=1*1m5j7wv*_ga*MTkzNDM4MTM5NS4xNzMxNjYzNTQ2*_ga_6QGX4YP9SF*czE3NTUwMzA0NDAkbzExMCRnMSR0MTc1NTAzMjQ5MCRqNTIkbDAkaDA."
                    rel="noreferrer"
                  >
                    <Button
                      text="BOOK YOUR ROOM"
                      btnClass="btnDark"
                      width={
                        isDesktopRange &&
                        isSearchOpen &&
                        windowWidth >= 1280 &&
                        windowWidth <= 1344
                          ? "180px"
                          : windowWidth < 1000 && windowWidth >= 960
                          ? "180px"
                          : isLaptop
                          ? "218px"
                          : "218px"
                      }
                      
                      color="#1D3967"
                    />
                  </a>
                  <a
                    href="https://bluehouse.tourdesk.is/Tour"
                    rel="noreferrer"
                    className={`${isDesktopRange ? s.bookTourButton : ""}`}
                  >
                    <Button
                      text="BOOK DAY TOURS"
                      btnClass="btnLight"
                      width={
                        windowWidth < 1000 && windowWidth >= 960
                          ? "180px"
                          : isLaptop
                          ? "218px"
                          : "218px"
                      }
                    />
                  </a>
                </>
              )}
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
=======
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

      {/* Anchor for potential layout shifts when search opens (kept) */}
      <div id="searchShiftTarget"></div>
    </>
  );
}
