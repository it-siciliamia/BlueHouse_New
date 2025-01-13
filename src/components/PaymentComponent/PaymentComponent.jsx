import React from "react";
import { useSelector } from "react-redux";
import { WithTransLate } from "../helpers/translating";
import {
  getPaymentStage,
  getBookingConfirmed,
} from "../../redux/technitial/technical-selectors";
import PriceSummaryPart from "./PriceSummaryPart/PriceSummaryPart";
import BookingDetailsPart from "./BookingDetailsPart/BookingDetailsPart";
import UserPaymentDetails from "./UserPaymentDetails/UserPaymentDetails";
import PaymentMethods from "./PaymentMethods/PaymentMethods";
import Support from "../SuportComponent/support";
import DayTours from "./DayTours/DayTours";

import s from "./PaymentComponent.module.scss";

const PaymentComponent = () => {
  const paymentStage = useSelector(getPaymentStage);
  const bookingConfirmed = useSelector(getBookingConfirmed);

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
      {paymentStage === 3 && !bookingConfirmed && (
        <>
          <h2 className={s.title}>
            <WithTransLate text="Payment Method" />
          </h2>
          <div className={s.paymentComponent}>
            <div style={{ width: "100%" }}>
              <PaymentMethods />
            </div>
          </div>
        </>
      )}
      {paymentStage === 3 && bookingConfirmed && (
        <>
          <div className={s.paymentCopmleted}>
            <h2 className={s.title}>
              <WithTransLate text="Booking Confirmed!" />
            </h2>
            <p className={s.generalText}>
              <WithTransLate text="We are excited to welcome you to Iceland soon!" />
            </p>
            <p className={s.text}>
              <WithTransLate text="Your confirmation has been sent to your email. Please check all your details. Feel free to contact us with any concerns. We wish you a pleasant stay." />
            </p>
          </div>
          <DayTours />
          <Support />
        </>
      )}
    </>
  );
};

export default PaymentComponent;
