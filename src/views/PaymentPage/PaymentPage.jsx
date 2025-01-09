import React from "react";
import { useMediaQuery } from "react-responsive";
import PaymentComponent from "../../components/PaymentComponent/PaymentComponent";
import FooterPayment from "../../components/PaymentComponent/FooterPayment/FooterPayment";

import s from "./PaymentPage.module.scss";

const PaymentPage = () => {
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });

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
