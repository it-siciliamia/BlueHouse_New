import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HeaderContext = createContext();

export const useHeaderSize = () => useContext(HeaderContext);

export const HeaderProvider = ({ children, value }) => {
  const [headerSize, setHeaderSize] = useState({ width: 0, height: 0 });
  const location = useLocation();

  useEffect(() => {
    const updateHeaderSize = () => {
      const headerElement = document.getElementById("header");
      if (headerElement) {
        const height = headerElement.clientHeight;
        const width = headerElement.clientWidth;
        setHeaderSize({ width, height });
      }
    };

    const timeout = setTimeout(() => {
      updateHeaderSize();
    }, 300);

    const observer = new ResizeObserver(() => updateHeaderSize());
    const headerElement = document.getElementById("header");
    if (headerElement) {
      observer.observe(headerElement);
    }

    if (value) {
      updateHeaderSize();
    }

    window.addEventListener("load", updateHeaderSize);
    window.addEventListener("resize", updateHeaderSize);

    return () => {
      window.removeEventListener("load", updateHeaderSize);
      window.removeEventListener("resize", updateHeaderSize);
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [value, location]);

  return (
    <HeaderContext.Provider value={headerSize}>
      {children}
    </HeaderContext.Provider>
  );
};
