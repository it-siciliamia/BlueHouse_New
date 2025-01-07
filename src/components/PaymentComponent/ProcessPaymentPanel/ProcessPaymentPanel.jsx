import React from "react";
import { useSelector } from "react-redux";
import { getPaymentStage } from "../../../redux/technitial/technical-selectors";
import { WithTransLate } from "../../helpers/translating";
import { useMediaQuery } from "react-responsive";
import s from "./ProcessPaymentPanel.module.scss";

const ProcessPaymentPanel = () => {
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });
  const paymentStage = useSelector(getPaymentStage);

  const stages = [
    { stage: 1, label: "Your selection" },
    { stage: 2, label: "Payment details" },
    { stage: 3, label: "Confirmation" },
  ];

  return (
    <div className={s.paymentPanel}>
      {stages.map((item, index) => (
        <React.Fragment key={item.stage}>
          <div
            className={`${s.circle} ${
              paymentStage >= item.stage ? s.active : ""
            }`}
          >
            {item.stage}
            <span
              className={`${s.label} ${
                paymentStage >= item.stage ? s.active : ""
              }`}
            >
              <WithTransLate text={item.label} />
            </span>
          </div>
          {index < stages.length - 1 && (
            <div
              className={`${s.line} ${
                paymentStage > item.stage ? s.activeLine : ""
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProcessPaymentPanel;
