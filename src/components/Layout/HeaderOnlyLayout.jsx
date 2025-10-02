import HeaderTest from "../header/HeaderTest.jsx";

import s from "./Layout.module.scss";

function HeaderOnlyLayout({children}) {

  return (
    <>
     <div className={s.header}><HeaderTest /></div>
     <div className={s.childrenWrap}>{children}</div>
    </>
  )
}

export default HeaderOnlyLayout;
