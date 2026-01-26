import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import s from "./Layout.module.scss";
import useBreakpoints from "../../Styles/useBreakpoints.js";
import CookiesBanner from "../CookiesBanner/CookiesBanner.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../header/Header.jsx";
import NewMap from "../map/NewMap.jsx";

function Layout({ hideMap }) {
  const { isSmallScreen, isDesktop } = useBreakpoints();

  return (
    <div className={s.container}>
      <Header />
      <div className={s.outlet}>
        <Outlet />
      </div>
      {!hideMap && !!(isSmallScreen || isDesktop) && (
        <div className={s.fullWidthSection}>
          <NewMap />
        </div>
      )}
      <CookiesBanner />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  hideMap: PropTypes.bool,
};

export default Layout;
