import { useState } from "react";
import { WithTransLate } from "../../translating/index";
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
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (componentName) => {
    setActiveModal(componentName);
  };

  const handleClose = () => {
    setActiveModal(null);
  };

  return (
    <div className={s.ourServices}>
      <div className={s.sectionName}></div>
      <div className={s.sectionContent}>
        {servicesData.map(({ icon, text }, index) => (
          <div
            key={index}
            className={s.serviceCard}
            onClick={() => handleOpenModal(icon)}
            style={{
              paddingTop: icon === money ? "10px" : "20px",
              gap: icon === money ? "30px" : "40px",
            }}
          >
            <div
              className={s.imageContainer}
              style={{
                height: icon === money ? "78px" : "58px",
                width: icon === money ? "78px" : "58px",
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
                <div>
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
