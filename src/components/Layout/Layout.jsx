import HeaderTest from "../header/HeaderTest.jsx";
import NewMap from "../map/NewMap";
import CookiesBanner from "../CookiesBanner/CookiesBanner.js";
import Footer from "../Footer/Footer.js";
import s from "./Layout.module.scss";

function Layout({children}) {

  return (
    <div className={s.container}>
      <HeaderTest />
      <div className={s.childrenWrap}>{children}</div>
      <NewMap />
      <CookiesBanner />
      <Footer />
    </div>
  );
}

export default Layout;
