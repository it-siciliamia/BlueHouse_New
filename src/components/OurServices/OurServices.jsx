import s from "./OurServices.module.scss";
import clock from "../../images/services/clock.svg";
import house from "../../images/services/house.svg";
import money from "../../images/services/money.svg";
import useBreakpoints from "../../Styles/useBreakpointsNew.js";
import { WithTransLate } from "../helpers/translating/index.jsx";
//import DifferentLocations from "./ServicesType/DifferentLocations.jsx"; //! muted
//import SelfCheckIn from "./ServicesType/selfCheckIn.jsx"; //! muted
//import CheapestPrice from "./ServicesType/CheapestPrice.jsx"; //! muted

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

  return (
    <div className={s.ourServices}>
      <div className={s.sectionContent}>
        {servicesData.map(({ icon, title, subtitle }, index) => (
          <div
            key={index}
            className={s.serviceCard}
            // Cards are non-interactive: no onClick, no modal
            style={{
              // paddingTop: "20px", // same padding for all cards
              gap: isDesktop ? "14.84px" : isMobile ? "15px" : "14.84px", // unified spacing logic
            }}
          >
            <div className={s.imageContainer}>
              <img src={icon} alt="Service Icon" className={s.icon} />
            </div>

            {/* Text block with title + subtitle */}
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

        {/* Modal logic removed by request */}
        {/*
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
        */}
      </div>
    </div>
  );
};

export default OurServices;
