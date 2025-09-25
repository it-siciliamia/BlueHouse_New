import Header from "../header/Header.jsx";
import NewMap from "../map/NewMap";
import CookiesBanner from "../CookiesBanner/CookiesBanner.js";
import Footer from "../Footer/Footer.js";
import { useState } from "react";

function Layout({children}) {
  // TEMPORARY HACK: The following state variables (`right`, `setRight`, `top`, `setTop`) were copied here from App.js.
  // This is just for compatibility with existing code and should be refactored properly soon.
  const [right, setRight] = useState("-6000px");
  const [top, setTop] = useState("-200%");

  return (
    <>
      <Header top={top} setTop={setTop} right={right} setRight={setRight} />
      <div className="App">{children}</div>
      <NewMap />
      <CookiesBanner />
      <Footer />
    </>
  );
}

export default Layout;
