import { useEffect, useState } from "react";

import Guidelines from "./Guidelines.jsx";
import s from "./HouseRulesComponent.module.scss";
import { WithTransLate } from "../../components/helpers/translating/index.jsx";
import useBreakpoints from "../../Styles/useBreakpointsNew.js";

function HouseRulesComponents() {
  const { isDesktop } = useBreakpoints();

  return (
    <section className={s.houseRules}>
      <div className={s.houseRulesContent}>
        <div className={isDesktop ? s.titleWrapper : s.titleWrapperMobile}>
          {!isDesktop && <div className={s.imageMain}></div>}
          <h2 className={s.title}>

          </h2>
          {isDesktop && <div className={s.imageMain}></div>}
        </div>
          <WithTransLate text="HOUSE RULES" />
        <Guidelines />
      </div>
    </section>
  );
}

export default HouseRulesComponents;
