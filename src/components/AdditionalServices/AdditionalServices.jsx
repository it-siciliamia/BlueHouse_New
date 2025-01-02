import React from "react";
import { useMediaQuery } from "react-responsive";
import { WithTransLate } from "../helpers/translating/index";
import addservices01 from "../../images/roombooking/add_services/add_services01.webp";
import addservices02 from "../../images/roombooking/add_services/add_services02.webp";
import addservices03 from "../../images/roombooking/add_services/add_services03.webp";
import addservices04 from "../../images/roombooking/add_services/add_services04.webp";

import s from "./AdditionalServices.module.scss";

const AdditionalServices = () => {
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 959.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });

  const additionalServicesData = [
    {
      name: "Daytours",
      link: "https://bluehouse.tourdesk.is/Tour",
      image: addservices01,
      imageD: addservices01,
    },
    {
      name: "Airport shuttle",
      link: "https://bluehouse.tourdesk.is/Transportation/Transfer",
      image: addservices02,
      imageD: addservices02,
    },
    {
      name: "Northern lights",
      link: "https://bluehouse.tourdesk.is/Category/Northern-Lights",
      image: addservices03,
      imageD: addservices03,
    },
    {
      name: "Car rental",
      link: "https://bluehouse.tourdesk.is/CarRental",
      image: addservices04,
      imageD: addservices04,
    },
  ];

  let displayedCards = [];
  if (isTablet) {
    displayedCards = additionalServicesData.slice(0, 4);
  } else {
    displayedCards = additionalServicesData.slice(0, 3);
  }

  return (
    <div className={s.addServices}>
      <div className={s.sectionWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>
            <WithTransLate text="ADDITIONAL SERVICES" />
          </h2>
        </div>
        <div className={s.sectionContent}>
          {displayedCards.map(({ image, imageD, name, link }) => (
            <div key={name} className={s.addServicesItem}>
              <a
                href={link}
                rel="noreferrer"
                target="_blank"
                style={{ width: "100%" }}
              >
                <img
                  alt={name}
                  src={isDesktop ? imageD : image}
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

export default AdditionalServices;
