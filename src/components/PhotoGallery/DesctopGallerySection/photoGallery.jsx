import React from "react";
import useBreakpoints from "../../Styles/useBreakpoints";
import { WithTransLate } from "../helpers/translating/index";
import nl from "../../images/RECOMMENDATIONS/Northernlights.webp";
import bl from "../../images/RECOMMENDATIONS/Blue-lagoon.webp";
import gc from "../../images/RECOMMENDATIONS/Glacier-Caves.webp";
import nld from "../../images/RECOMMENDATIONS/Northernlights01.webp";
import bld from "../../images/RECOMMENDATIONS/Blue-lagoon01.webp";
import gcd from "../../images/RECOMMENDATIONS/Glacier-Caves01.webp";
import restd from "../../images/RECOMMENDATIONS/Geysers01.webp";
import rest from "../../images/RECOMMENDATIONS/Geysers.webp";

import s from "./Recommendations.module.scss";
import Button from "../Shared/Button/Button";
import LazyLoad from 'react-lazyload'; // Import LazyLoad
import SmartImg from './SmartImg'; // Assuming SmartImg is in the same directory

const Recommendations = () => {
  const { isTablet, isDesktop } = useBreakpoints();
  
  const recommendationsData = [
    {
      name: "Northern Lights",
      link: "https://blog.bluehouse.is/?s=northen+lights",
      description:
        "In Icelandic folklore, the Northern Lights were believed to be the spirits of the dead, dancing in the sky as they searched for a final resting place.",
      image: nl,
      imageD: nld,
    },
    {
      name: "Blue Lagoon",
      link: "https://blog.bluehouse.is/?s=blue+lagoon",
      description:
        "The Blue Lagoon is famous for its milky blue geothermal seawater. The water is naturally renewed every 48 hours and has a temperature of around 100°F (38°C).",
      image: bl,
      imageD: bld,
    },
    {
      name: "Glacier Caves",
      link: "https://blog.bluehouse.is/?s=glacier+caves",
      description:
        "The closest natural ice caves are located under the Myrdalsjokull glacier, about a 2-hour drive from Reykjavik, and are accessible year-round with guided tours.",
      image: gc,
      imageD: gcd,
    },
    {
      name: "Valley of Geysers",
      link: "https://blog.bluehouse.is/?s=Valley+of+Geysers",
      description: '',
      image: rest,
      imageD: restd,
    },
  ];

  let displayedCards = [];
  if (isTablet) {
    displayedCards = recommendationsData.slice(0, 4);
  } else {
    displayedCards = recommendationsData.slice(0, 3);
  }

  return (
    <div id="RECOMMENDATIONS" className={s.recommendations}>
      <div className={s.sectionWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>
            <WithTransLate text="RECOMMENDATIONS" />
          </h2>
        </div>
        <div id="imagesSection" className={s.sectionContent}>
          {displayedCards.map(({ name, image, imageD, description }, i) => (
            <figure key={i} className={s.card}>
              <LazyLoad height={400} offset={100} placeholder={<div className={s.placeholder}>Loading...</div>}>
                <SmartImg
                  src={isDesktop ? imageD : image}
                  alt={name}
                  width={368}
                  height={368}
                  priority={i === 0} // Set priority to the first card for eager loading
                />
              </LazyLoad>
              <figcaption>
                <h3>
                  <WithTransLate text={name} />
                </h3>
                <p>
                  <WithTransLate text={description ?? ""} />
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
