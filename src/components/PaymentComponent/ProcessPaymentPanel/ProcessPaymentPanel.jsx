import React from "react";
import { useSelector } from "react-redux";
import { getPaymentStage } from "../../../redux/technitial/technical-selectors";
import { WithTransLate } from "../../helpers/translating";

import s from "./ProcessPaymentPanel.module.scss";

const ProcessPaymentPanel = () => {
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
            <span style={{ marginTop: "3px" }}>{item.stage}</span>
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
