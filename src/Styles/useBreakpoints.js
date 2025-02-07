import { useState, useEffect } from "react";

const useBreakpoints = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateBreakpoints = () => {
      const width = window.innerWidth;

      setIsMobile(width < 600);
      setIsTablet(width >= 600 && width < 960);
      setIsLaptop(width >= 960 && width < 1280);
      setIsDesktop(width >= 1280 && width <= 2200);
    };

    updateBreakpoints();

    window.addEventListener("resize", updateBreakpoints);

    return () => {
      window.removeEventListener("resize", updateBreakpoints);
    };
  }, []);

  return { isMobile, isTablet, isLaptop, isDesktop };
};

export default useBreakpoints;
