import React from "react";
import { useSelector } from "react-redux";
import { WithTransLate } from "../helpers/translating";
import { getPaymentStage } from "../../redux/technitial/technical-selectors";
import PriceSummaryPart from "./PriceSummaryPart/PriceSummaryPart";
import BookingDetailsPart from "./BookingDetailsPart/BookingDetailsPart";
import UserPaymentDetails from "./UserPaymentDetails/UserPaymentDetails";

import s from "./PaymentComponent.module.scss";

const PaymentComponent = () => {
  const paymentStage = useSelector(getPaymentStage);

  return (
    <>
      {paymentStage === 1 && (
        <>
          <h2 className={s.title}>
            <WithTransLate text="Your selection" />
          </h2>
          <div className={s.paymentComponent}>
            <div style={{ width: "52.5%" }}>
              <PriceSummaryPart />
            </div>
            <div style={{ width: "47.5%" }}>
              <BookingDetailsPart />
            </div>
          </div>
        </>
      )}
      {paymentStage === 2 && (
        <>
          <h2 className={s.title}>
            <WithTransLate text="Payment Details" />
          </h2>
          <div className={s.paymentComponent}>
            <div style={{ width: "100%" }}>
              <UserPaymentDetails />
            </div>
          </div>
        </>
      )}
      {paymentStage === 3 && (
        <>
          <h2 className={s.title}>
            <WithTransLate text="Wellcome to Stage 3" />
          </h2>
          <div className={s.paymentComponent}>
            <div style={{ width: "100%" }}></div>
          </div>
        </>
      )}
    </>
  );
};

export default PaymentComponent;
