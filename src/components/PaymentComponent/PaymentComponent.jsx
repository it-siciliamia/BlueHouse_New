import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WithTransLate } from "../helpers/translating";
import { useMediaQuery } from "react-responsive";
import {
  getPaymentStage,
  getBookingConfirmed,
} from "../../redux/technitial/technical-selectors";
import { setPaymentStage } from "../../redux/technitial/technical-slice";
import PriceSummaryPart from "./PriceSummaryPart/PriceSummaryPart";
import BookingDetailsPart from "./BookingDetailsPart/BookingDetailsPart";
import UserPaymentDetails from "./UserPaymentDetails/UserPaymentDetails";
import PaymentMethods from "./PaymentMethods/PaymentMethods";
import ProcessPaymentPanel from "./ProcessPaymentPanel/ProcessPaymentPanel";
import Button from "../Shared/Button/Button";
import { IoIosArrowBack } from "react-icons/io";

import s from "./PaymentComponent.module.scss";

const PaymentComponent = () => {
  const dispatch = useDispatch();
  const paymentStage = useSelector(getPaymentStage);
  const bookingConfirmed = useSelector(getBookingConfirmed);
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 959 });
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [paymentStage, bookingConfirmed]);

  const handleBackClick = () => {
    dispatch(setPaymentStage(paymentStage - 1));
  };

  return (
    <>
      {paymentStage === 1 && (
        <div className={s.paymentComponent}>
          {(isMobile || isTablet) && <ProcessPaymentPanel />}
          <div className={s.titleWrapper}>
            <h2 className={s.title}>
              <WithTransLate text="Your selection" />
            </h2>
          </div>
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
        <div className={s.paymentComponent}>
          {(isMobile || isTablet) && <ProcessPaymentPanel />}
          <div className={s.titleWrapper}>
            <h2 className={s.title}>
              <WithTransLate text="Payment Details" />
            </h2>
            <Button
              text="Back"
              icon={<IoIosArrowBack />}
              size="24px"
              width={isLaptop ? "95px" : "115px"}
              btnClass="btnLightWithOut"
              handleClick={handleBackClick}
            />
          </div>
          <div className={s.componentParts}>
            <div style={{ width: "100%" }}>
              <UserPaymentDetails />
            </div>
          </div>
        </div>
      )}
      {paymentStage === 3 && !bookingConfirmed && (
        <div className={s.paymentComponent}>
          {(isMobile || isTablet) && <ProcessPaymentPanel />}
          <div className={s.titleWrapper}>
            <h2 className={s.title}>
              <WithTransLate text="Payment Method" />
            </h2>
            <Button
              text="Back"
              icon={<IoIosArrowBack />}
              size="24px"
              width={isLaptop ? "95px" : "115px"}
              btnClass="btnLightWithOut"
              handleClick={handleBackClick}
            />
          </div>
          <div className={s.componentParts}>
            <div style={{ width: "100%" }}>
              <PaymentMethods />
            </div>
          </div>
        </div>
      )}
      {paymentStage === 3 && bookingConfirmed && (
        <div className={s.paymentComponent}>
          <div className={s.paymentCopmleted}>
            <h2 className={s.title} style={{ textAlign: "center" }}>
              <WithTransLate text="Booking Confirmed!" />
            </h2>
            <p className={s.generalText} style={{ textAlign: "center" }}>
              <WithTransLate text="We are excited to welcome you to Iceland soon!" />
            </p>
            <p className={s.text}>
              <WithTransLate text="Your confirmation has been sent to your email. Please check all your details. Feel free to contact us with any concerns. We wish you a pleasant stay." />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentComponent;
