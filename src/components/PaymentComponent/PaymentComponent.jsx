import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { WithTransLate } from "../helpers/translating";
import { useMediaQuery } from "react-responsive";
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
import ProcessPaymentPanel from "./ProcessPaymentPanel/ProcessPaymentPanel";

import s from "./PaymentComponent.module.scss";

const PaymentComponent = () => {
  const paymentStage = useSelector(getPaymentStage);
  const bookingConfirmed = useSelector(getBookingConfirmed);
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 959 });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [paymentStage, bookingConfirmed]);

  return (
    <>
      {paymentStage === 1 && (
        <div className={s.paymentComponent}>
          {(isMobile || isTablet) && <ProcessPaymentPanel />}
          <h2 className={s.title}>
            <WithTransLate text="Your selection" />
          </h2>
          <div className={s.componentParts}>
            <div style={{ width: isTablet || isMobile ? "100%" : "52.5%" }}>
              <PriceSummaryPart />
            </div>
            <div style={{ width: isTablet || isMobile ? "100%" : "47.5%" }}>
              <BookingDetailsPart />
            </div>
          </div>
        </div>
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
