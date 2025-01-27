import React from "react";
import { useState } from "react";
import { WithTransLate } from "../helpers/translating/index";
import { useMediaQuery } from "react-responsive";
import DifferentLocations from "./ServicesType/DifferentLocations";
import SelfCheckIn from "./ServicesType/selfCheckIn";
import CheapestPrice from "./ServicesType/CheapestPrice";
import money from "../../images/services/money.svg";
import clock from "../../images/services/clock.svg";
import house from "../../images/services/house.svg";
import s from "./OurServices.module.scss";

const servicesData = [
  {
    icon: money,
    text: "CHEAPEST PRICE GUARANTEED IF BOOKED DIRECTLY",
  },
  {
    icon: clock,
    text: "SELF-CHECK-IN & SELF-SERVICE BREAKFAST TO OFFER THE GREATEST FLEXIBILITY",
  },
  {
    icon: house,
    text: "3 DIFFERENT LOCATIONS ON A SCENIC PENINSULA 10 MINUTES FROM DOWNTOWN",
  },
];

const OurServices = () => {
  const isMobile = useMediaQuery({ maxDeviceWidth: 767 });
  // const isTablet = useMediaQuery({
  //   minDeviceWidth: 768,
  //   maxDeviceWidth: 812,
  // });
  const isDesktop = useMediaQuery({ minDeviceWidth: 813 });

  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (componentName) => {
    setActiveModal(componentName);
  };

  const handleClose = () => {
    setActiveModal(null);
  };

  return (
    <div className={s.ourServices}>
      {isDesktop && <div className={s.sectionName}></div>}
      <div className={s.sectionContent}>
        {servicesData.map(({ icon, text }, index) => (
          <div
            key={index}
            className={s.serviceCard}
            onClick={() => handleOpenModal(icon)}
            style={{
              paddingTop: icon === money ? "10px" : "20px",
              gap:
                icon === money && isDesktop
                  ? "30px"
                  : icon !== money && isDesktop
                  ? "40px"
                  : icon === money && isMobile
                  ? "10px"
                  : icon !== money && isMobile
                  ? "20px"
                  : "40px",
            }}
          >
            <div
              className={s.imageContainer}
              style={{
                height:
                  icon === money && isDesktop
                    ? "78px"
                    : icon === money && !isDesktop
                    ? "58px"
                    : icon !== money && isDesktop
                    ? "58px"
                    : "48px",
                width:
                  icon === money && isDesktop
                    ? "78px"
                    : icon === money && !isDesktop
                    ? "58px"
                    : icon !== money && isDesktop
                    ? "58px"
                    : "48px",
              }}
            >
              <img src={icon} alt="Service Icon" className={s.icon} />
            </div>
            <p className={s.description}>
              <WithTransLate text={text} />
            </p>
          </div>
        ))}

        {activeModal && (
          <div className={s.modal}>
            <div className={s.modalContent}>
              {activeModal === money && (
                <div className={s.textContent}>
                  <CheapestPrice handleClose={handleClose} />
                </div>
              )}
              {activeModal === clock && (
                <div>
                  <SelfCheckIn handleClose={handleClose} />
                </div>
              )}
              {activeModal === house && (
                <div>
                  <DifferentLocations handleClose={handleClose} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurServices;
