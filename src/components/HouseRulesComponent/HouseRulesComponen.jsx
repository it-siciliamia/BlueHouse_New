import React from "react";
import image from "../../images/houserules.jpg";
import { WithTransLate } from "../../components/helpers/translating/index";
import Guidelines from "./Guidelines.jsx";

import s from "./HouseRulesComponent.module.scss";

function HouseRulesComponents() {
  return (
    <section className={s.houseRules}>
      <div className={s.titleWrapper}>
        <h2 className={s.title}>
          <WithTransLate text="HOUSE RULES" />
        </h2>
      </div>

      <div className={s.houseRulesContent}>
        <div className={s.imageMain}></div>
        <Guidelines />
      </div>
    </section>
  );
}

export default HouseRulesComponents;
