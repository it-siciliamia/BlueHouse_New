import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { getPaymentStage } from "../../redux/technitial/technical-selectors";
import PriceSummaryPart from "./PriceSummaryPart/PriceSummaryPart";
import BookingDetailsPart from "./BookingDetailsPart/BookingDetailsPart";

import s from "./PaymentComponent.module.scss";

const PaymentComponent = () => {
  const paymentStage = useSelector(getPaymentStage);
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });

  return (
    <>
      {paymentStage === 1 && (
        <div className={s.paymentComponent}>
          <div style={{ width: "52.5%" }}>
            <PriceSummaryPart />
          </div>
          <div style={{ width: "47.5%" }}>
            <BookingDetailsPart />
          </div>
        </div>
      )}
      {paymentStage === 2 && (
        <div className={s.paymentComponent}>Привіт другий стейдж</div>
      )}
    </>
  );
};

export default PaymentComponent;
