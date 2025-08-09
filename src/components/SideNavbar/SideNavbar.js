/**
 * SideNavbar.js
 * --------------
 * Acts as the main container and logic handler for the sidebar.
 * 
 * Key points:
 * - Imports styles from SideNavbar.styles.js and renders the sidebar wrapper `<div>`.
 * - Uses `useLocation` and `useHistory` (react-router-dom) to handle page navigation 
 *   when a menu item is clicked.
 * - Receives `handleOpenAndCloseSideNavbar` via props from a parent component.
 * - The `scroll` function triggers closing the sidebar by changing the `right` position to "-100%".
 * - The `navigateAndScroll` function handles navigation to an anchor on the home page 
 *   and then closes the sidebar smoothly.
 * - Renders `<SideNavbarContent>` as a child, passing down `scroll`, `classes`, and `navigateAndScroll`.
 * 
 * This file **does not** contain any of the menu markup — only logic and structural container.
 */
import React, { useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";
import useSideNavbarStyles from "./SideNavbar.styles";
import SideNavbarContent from "./SideNavbarContent";

function SideNavbar(props) {
  const classes = useSideNavbarStyles(props);
  const { handleOpenAndCloseSideNavbar } = props;

  const location = useLocation();
  const history = useHistory();

  // Закрытие с плавной анимацией
  const scroll = useCallback(() => {
    handleOpenAndCloseSideNavbar("-100%");
  }, [handleOpenAndCloseSideNavbar]);

  const isHomePage = location.pathname === "/";
  const navigateAndScroll = useCallback(
    (to) => {
      if (!isHomePage) {
        history.push("/");
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 500);
        scroll();
      } else {
        window.scrollTo(0, 0);
        scroll();
      }
    },
    [isHomePage, history, scroll]
  );

  return (
    <div className={classes.root}>
      <SideNavbarContent
        scroll={scroll}
        classes={classes}
        navigateAndScroll={navigateAndScroll}
      />
    </div>
  );
}

export default SideNavbar;
