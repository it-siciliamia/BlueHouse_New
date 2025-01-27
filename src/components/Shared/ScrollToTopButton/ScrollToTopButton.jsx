import React, { useState, useEffect } from "react";
import arrowUpIcon from "../../../images/logo_small.png";

import s from "./ScrollToTopButton.module.scss";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={s.scrollToTopButton}
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      {isVisible && (
        <div className={`${s.arrowUp} ${isVisible ? s.blinking : ""}`}></div>
      )}
      <div className={s.imgWrapper}>
        <img src={arrowUpIcon} alt="Scroll to top" className={s.arrowIcon} />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
