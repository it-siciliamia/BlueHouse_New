import { useSelector } from "react-redux";

import s from "./PaymentPage.module.scss";
import DayTours from "../../components/PaymentComponent/DayTours/DayTours.jsx";
import FooterPayment from "../../components/PaymentComponent/FooterPayment/FooterPayment.jsx";
import PaymentComponent from "../../components/PaymentComponent/PaymentComponent.jsx";
import Support from "../../components/SuportComponent/support.jsx";
import { getBookingConfirmed } from "../../redux/technitial/technical-selectors.js";

const PaymentPage = () => {
  const bookingConfirmed = useSelector(getBookingConfirmed);
  return (
    <div className={s.payment}>
      <div className={s.container}>
        <PaymentComponent />
      </div>
      {!!bookingConfirmed && (
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
