import { Outlet } from "react-router-dom";

import s from "./Layout.module.scss";
import useBreakpoints from "../../Styles/useBreakpoints.js";
import CookiesBanner from "../CookiesBanner/CookiesBanner.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../header/Header.jsx";
import NewMap from "../map/NewMap.jsx";

function Layout() {
  const { isSmallScreen, isDesktop } = useBreakpoints();

  return (
    <div className={s.container}>
      <Header />
      <div className={s.outlet}>
        <Outlet />
      </div>
      {!!(isSmallScreen || isDesktop) && (
        <div className={s.fullWidthSection}>
          <NewMap />
        </div>
      )}
      <CookiesBanner />
      <Footer />
    </div>
  );
}

export default Layout;
