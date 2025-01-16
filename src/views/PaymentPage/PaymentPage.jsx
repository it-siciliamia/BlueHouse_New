import React from "react";
import { useSelector } from "react-redux";
import PaymentComponent from "../../components/PaymentComponent/PaymentComponent";
import FooterPayment from "../../components/PaymentComponent/FooterPayment/FooterPayment";
import DayTours from "../../components/PaymentComponent/DayTours/DayTours";
import Support from "../../components/SuportComponent/support";
import { getBookingConfirmed } from "../../redux/technitial/technical-selectors";

import s from "./PaymentPage.module.scss";

const PaymentPage = () => {
  const bookingConfirmed = useSelector(getBookingConfirmed);
  return (
    <div className={s.payment}>
      <div className={s.container}>
        <PaymentComponent />
      </div>
      {bookingConfirmed && (
        <div className={s.addParts}>
          <DayTours />
          <Support />
        </div>
      )}
      <FooterPayment />
    </div>
  );
};

export default PaymentPage;
