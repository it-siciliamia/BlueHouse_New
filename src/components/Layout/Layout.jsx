import Header from "../header/Header.jsx";
import NewMap from "../map/NewMap";
import CookiesBanner from "../CookiesBanner/CookiesBanner.js";
import Footer from "../Footer/Footer.jsx";

import s from "./Layout.module.scss";

function Layout({children}) {

  return (
    <div className={s.container}>
      <Header />
      <div className={s.childrenWrap}>{children}</div>
      <div className={s.fullWidthSection}><NewMap /></div>
      <CookiesBanner />
      <Footer />
    </div>
  );
}

export default Layout;
