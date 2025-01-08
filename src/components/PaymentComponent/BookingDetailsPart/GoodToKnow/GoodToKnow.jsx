import React from "react";
import { goodToKnowData } from "../goodToKnowData";
import { WithTransLate } from "../../../helpers/translating";
import s from "./GoodToKnow.module.scss";

const GoodToKnow = ({ title }) => {
  const getRandomItems = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const currentData = goodToKnowData.find((item) => item.title === title);

  const randomGoodToKnow = currentData
    ? getRandomItems(currentData.goodToKnow, 2)
    : [];

  return (
    <div className={s.goodToKnowWrapper}>
      <h3 className={s.title}>
        <WithTransLate text="Good To Know:" />
      </h3>
      <ul className={s.list}>
        {randomGoodToKnow.map((item, index) => (
          <li key={index} className={s.item}>
            {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoodToKnow;
