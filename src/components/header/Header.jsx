import React, { useState } from "react";
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

          {(isDesktop || isLaptop) && (
            <div className={s.bookingButtonsWrapper}>
              {location.pathname === "/payment" ? (
                <ProcessPaymentPanel />
              ) : (
                <>
                  <a
                    href="/"
                    rel="noreferrer"
                  >
                    <Button
                      text="MAIN PAGE"
                      btnClass="btnDark"
                      width={isLaptop ? "240px" : "280px"}
                      color='#1D3967'
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
                </>
              )}
            </div>
          )}

          <div className={s.rightPart}>
            <Search />

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
    </>
  );
}
