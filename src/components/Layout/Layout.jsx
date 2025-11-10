import Header from "../header/Header.jsx";
import NewMap from "../map/NewMap.jsx";
import CookiesBanner from "../CookiesBanner/CookiesBanner.jsx";
import Footer from "../Footer/Footer.jsx";

import s from "./Layout.module.scss";
import useBreakpointsNew from "../../Styles/useBreakpointsNew.js";

function Layout({children}) {
  const {isSmallScreen, isDesktop} = useBreakpointsNew();

  return (
    <div className={s.container}>
      <Header />
      <div className={s.childrenWrap}>{children}</div>
      {(isSmallScreen || isDesktop) && <div className={s.fullWidthSection}><NewMap /></div>}
      <CookiesBanner />
      <Footer />
    </div>
  );
}

export default Layout;
