import React, { useState } from "react";
import { WithTransLate } from "../helpers/translating/index";
import useBreakpoints from "../../Styles/useBreakpoints";
import DifferentLocations from "./ServicesType/DifferentLocations";
import SelfCheckIn from "./ServicesType/selfCheckIn";
import CheapestPrice from "./ServicesType/CheapestPrice";
import money from "../../images/services/money.svg";
import clock from "../../images/services/clock.svg";
import house from "../../images/services/house.svg";
import s from "./OurServices.module.scss";

// Titles + subtitles exactly as in the design
const servicesData = [
  {
    icon: money,
    title: "CHEAPEST PRICE GUARANTEED",
    subtitle: "If you book through our website",
  },
  {
    icon: clock,
    title: "GREATEST FLEXIBILITY",
    subtitle: "Self check-in and self-service breakfast",
  },
  {
    icon: house,
    title: "3 LOCATIONS",
    subtitle: "On one of the best spots for catching Northern Lights",
  },
];

const OurServices = () => {
  const { isMobile, isDesktop } = useBreakpoints();
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (componentName) => setActiveModal(componentName);
  const handleClose = () => setActiveModal(null);

  return (
    <div className={s.ourServices}>
      <div className={s.sectionContent}>
        {servicesData.map(({ icon, title, subtitle }, index) => (
          <div
            key={index}
            className={s.serviceCard}
            onClick={() => handleOpenModal(icon)}
            style={{
              // keep your original adaptive paddings/gaps
              paddingTop: icon === money ? (isDesktop ? "10px" : "30px") : "20px",
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
                // keep your original adaptive icon sizing
                height:
                  icon === money && isDesktop
                    ? "78px"
                    : icon === money && !isDesktop
                    ? "38px"
                    : icon !== money && isDesktop
                    ? "58px"
                    : "48px",
                width:
                  icon === money && isDesktop
                    ? "78px"
                    : icon === money && !isDesktop
                    ? "38px"
                    : icon !== money && isDesktop
                    ? "58px"
                    : "38px",
              }}
            >
              <img src={icon} alt="Service Icon" className={s.icon} />
            </div>

            {/* Title + subtitle with stable height for perfect alignment */}
            <div className={s.textBlock}>
              <p className={s.cardTitle}>
                <WithTransLate text={title} />
              </p>
              <p className={s.cardSubtitle}>
                <WithTransLate text={subtitle} />
              </p>
            </div>
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
            {/* overlay handled in your modal implementation if used */}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurServices;
