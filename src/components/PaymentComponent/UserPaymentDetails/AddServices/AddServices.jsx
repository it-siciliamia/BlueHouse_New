import React from "react";
import { useSelector } from "react-redux";
import {
  getAddParams,
  getPaymentType,
} from "../../../../redux/dataSearch/datesSearch-selectors";
import { WithTransLate } from "../../../helpers/translating";
import tv from "../../../../images/services_room/netflix.svg";
import peoples from "../../../../images/services_room/guest.svg";
import spot from "../../../../images/services_room/camera.svg";
import parking from "../../../../images/services_room/parking.svg";
import nosmoking from "../../../../images/services_room/no-smoking.svg";
import nonref from "../../../../images/services_room/stop.svg";
import ref from "../../../../images/services_room/refundable.svg";

import s from "./AddServices.module.scss";

const AddServices = () => {
  const paymentType = useSelector(getPaymentType);
  const { adult, children } = useSelector(getAddParams);

  const firstColumn = [
    { icon: spot, description: "Spot for Northern Lights" },
    { icon: nosmoking, description: "No smoking" },
    {
      icon: paymentType === "refundable" ? ref : nonref,
      description:
        paymentType === "refundable" ? "Refundable" : "Non-refundable ",
    },
  ];
  const secondColumn = [
    { icon: tv, description: "Netflix TV" },
    { icon: parking, description: "Free parking" },
    {
      icon: peoples,
      description: `${adult} ${adult === 1 ? "adult" : "adults"}${
        children > 0
          ? `, ${children} ${children === 1 ? "child" : "children"}`
          : ""
      }`,
    },
  ];

  return (
    <div className={s.roomServices}>
      <div className={s.servicesColumn}>
        {firstColumn.map((service, idx) => (
          <div key={idx} className={s.serviceItem}>
            <img
              src={service.icon}
              alt={service.name}
              style={{ width: "22px", height: "22px" }}
            />
            <span className={s.servicesText}>
              <WithTransLate text={service.description} />
            </span>
          </div>
        ))}
      </div>
      <div className={s.servicesColumn}>
        {secondColumn.map((service, idx) => (
          <div key={idx} className={s.serviceItem}>
            <img
              src={service.icon}
              alt={service.name}
              style={{ width: "22px", height: "22px" }}
            />
            <span className={s.servicesText}>
              <WithTransLate text={service.description} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddServices;
