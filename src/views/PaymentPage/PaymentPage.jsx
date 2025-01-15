import React from "react";
import PaymentComponent from "../../components/PaymentComponent/PaymentComponent";
import FooterPayment from "../../components/PaymentComponent/FooterPayment/FooterPayment";

import s from "./PaymentPage.module.scss";

const PaymentPage = () => {
  return (
    <div className={s.payment}>
      <div className={s.container}>
        <PaymentComponent />
      </div>
      <FooterPayment />
    </div>
  );
};

export default PaymentPage;
