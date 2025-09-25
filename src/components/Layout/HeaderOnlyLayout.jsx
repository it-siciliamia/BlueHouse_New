import { useState } from "react";
import Header from "../header/Header.jsx";


function HeaderOnlyLayout({children}) {
  // TEMPORARY HACK: The following state variables (`right`, `setRight`, `top`, `setTop`) were copied here from App.js.
  // This is just for compatibility with existing code and should be refactored properly soon.
  const [right, setRight] = useState("-6000px");
  const [top, setTop] = useState("-200%");

  return (
    <>
     <Header top={top} setTop={setTop} right={right} setRight={setRight}/>
     {children}
    </>
  )
}

export default HeaderOnlyLayout;
