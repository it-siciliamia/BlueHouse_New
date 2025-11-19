import { Outlet } from "react-router-dom";
import Header from "../header/Header.jsx";

import s from "./Layout.module.scss";

function HeaderOnlyLayout() {

  return (
    <>
     <div className={s.header}><Header /></div>
     <div className={s.outlet}><Outlet /></div>
    </>
  )
}

export default HeaderOnlyLayout;
