import Header from "../header/Header.jsx";

import s from "./Layout.module.scss";

function HeaderOnlyLayout({children}) {

  return (
    <>
     <div className={s.header}><Header /></div>
     <div className={s.childrenWrap}>{children}</div>
    </>
  )
}

export default HeaderOnlyLayout;
