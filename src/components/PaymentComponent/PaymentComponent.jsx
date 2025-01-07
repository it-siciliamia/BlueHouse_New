import React from "react";
import { useMediaQuery } from "react-responsive";
import PriceSummaryPart from "./PriceSummaryPart/PriceSummaryPart";

import s from "./PaymentComponent.module.scss";

const PaymentComponent = () => {
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });

  return (
    <div className={s.paymentComponent}>
      <div style={{ width: "55%" }}>
        <PriceSummaryPart />
      </div>
      <div style={{ width: "55%" }}>
        <PriceSummaryPart />
      </div>
    </div>
  );
};

export default PaymentComponent;
