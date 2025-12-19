import { Outlet } from "react-router-dom";

import s from "./Layout.module.scss";
import Header from "../header/Header.jsx";

function HeaderOnlyLayout({ children }) {
  return (
    <>
      <div className={s.header}>
        <Header />
      </div>
      <div className={s.outlet}>{children ? children : <Outlet />}</div>
    </>
  );
}

export default HeaderOnlyLayout;
