import React, { useEffect, useState } from "react";
import { WithTransLate } from "../../components/helpers/translating/index";
import Guidelines from "./Guidelines.jsx";

import s from "./HouseRulesComponent.module.scss";

function HouseRulesComponents() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1280px)");

    const handleResize = (e) => {
      setIsMobileOrTablet(e.matches);
    };

    handleResize(mediaQuery); // Initial check
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <section className={s.houseRules}>
      <div className={s.houseRulesContent}>
        
        {isMobileOrTablet ? (
          <div className={s.titleWrapperMobile}>
            <div className={s.imageMain}></div>
            <h2 className={s.title}>
              <WithTransLate text="HOUSE RULES" />
            </h2>
          </div>
        ) : (
          <div className={s.titleWrapper}>
            <h2 className={s.title}>
              <WithTransLate text="HOUSE RULES" />
            </h2>
            <div className={s.imageMain}></div>
          </div>
        )}
        <Guidelines />
      </div>
    </section>
  );
}

export default HouseRulesComponents;