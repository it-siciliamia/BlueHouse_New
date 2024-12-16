import React from "react";
import { useMediaQuery } from "react-responsive";
import { WithTransLate } from "../helpers/translating/index";
import nl from "../../images/RECOMMENDATIONS/Northernlights.webp";
import bl from "../../images/RECOMMENDATIONS/Blue-lagoon.webp";
import gc from "../../images/RECOMMENDATIONS/Glacier-Caves.webp";
import nld from "../../images/RECOMMENDATIONS/Northernlights01.webp";
import bld from "../../images/RECOMMENDATIONS/Blue-lagoon01.webp";
import gcd from "../../images/RECOMMENDATIONS/Glacier-Caves01.webp";
import s from "./Recommendations.module.scss";

const Recommendations = () => {
  // const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 600 });
  // const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1280 });
  const isDesctop = useMediaQuery({ minWidth: 1281, maxWidth: 2200 });

  const recommendationsData = [
    {
      name: "Northern Lights",
      link: "https://blog.bluehouse.is/?s=northen+lights",
      image: nl,
      imageD: nld,
    },
    {
      name: "Blue Lagoon",
      link: "https://blog.bluehouse.is/?s=blue+lagoon",
      image: bl,
      imageD: bld,
    },
    {
      name: "Glacier Caves",
      link: "https://blog.bluehouse.is/?s=glacier+caves",
      image: gc,
      imageD: gcd,
    },
  ];

  return (
    <div className={s.recommendations}>
      <div className={s.sectionWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>
            <WithTransLate text="RECOMMENDATIONS" />
          </h2>
        </div>
        <div className={s.sectionContent}>
          {recommendationsData.map(({ image, imageD, name, link }) => (
            <div key={name} className={s.recommendationItem}>
              <a
                href={link}
                rel="noreferrer"
                target="_blank"
                style={{ width: "100%" }}
              >
                <img
                  alt={name}
                  src={isDesctop ? imageD : image}
                  className={s.image}
                />
              </a>
              <span className={s.text}>
                <WithTransLate text={name} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
