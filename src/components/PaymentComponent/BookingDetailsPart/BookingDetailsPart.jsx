import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WithTransLate } from "../../helpers/translating";
import {
  getPricePerNight,
  getDayDifference,
  getCheckInDay,
  getCheckOutDay,
  getAppartmentName,
} from "../../../redux/dataSearch/datesSearch-selectors";
import { setPaymentStage } from "../../../redux/technitial/technical-slice";
import PartCalendar from "../../../views/RoomDetails/PartCalendar/PartCalendar";
import GoodToKnow from "./GoodToKnow/GoodToKnow";
import Button from "../../Shared/Button/Button";
import { items } from "../../ServicesRoom/ServicesRoomData";
import placeholder from "../../../images/homePageSlider/placeholder.webp";
import { googleRatings } from "../../../views/roombooking/RoomBooking";
import google from "../../../images/google.png";
import parking from "../../../images/parking.svg";
import moment from "moment";
import s from "./BookingDetailsPart.module.scss";

const BookingDetailsPart = () => {
  const dispatch = useDispatch();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const pricePerNight = useSelector(getPricePerNight);
  const dayDifference = useSelector(getDayDifference);
  const firstDay = useSelector(getCheckInDay);
  const secondDay = useSelector(getCheckOutDay);
  const appartmentName = useSelector(getAppartmentName);

  const totalReviews = googleRatings.reduce(
    (sum, item) => sum + item.reviews,
    0
  );
  const averageRating =
    googleRatings.reduce((sum, item) => sum + item.rating * item.reviews, 0) /
    totalReviews;

  const handleEditClick = () => {
    setIsCalendarOpen(false);
  };

  const formatDate = (date) => {
    if (!date) return "Invalid Date";
    return moment(date, "YYYYMMDD").format("ddd, D MMMM, YYYY");
  };

  const getApartmentPhoto = (title) => {
    const apartment = items.find((item) => item.title === title);
    return apartment ? apartment.photos[0] : null;
  };

  const apartmentPhoto = getApartmentPhoto(appartmentName);

  return (
    <div className={s.container}>
      <div className={s.partContent}>
        <h2
          className={s.title}
          style={{ marginLeft: "40px", marginRight: "40px" }}
        >
          <WithTransLate text="Your Booking Details" />
        </h2>

        <div className={s.bookingWrapper} style={{ position: "relative" }}>
          <p className={s.text} style={{ margin: "0" }}>
            <WithTransLate
              text={`Total length of stay: ${dayDifference} ${
                dayDifference === 1 ? "night" : "nights"
              }`}
            />
          </p>
          <div className={s.leftPartWrapper}>
            <button
              className={s.button}
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            >
              <WithTransLate text="Edit" />
            </button>
          </div>
          {isCalendarOpen && (
            <div className={s.modalCalendar}>
              <PartCalendar onEditClick={handleEditClick} />
            </div>
          )}
        </div>

        <div className={s.dateWrapper}>
          <div className={s.partDate}>
            <p className={s.text} style={{ margin: "0", fontSize: "20px" }}>
              <WithTransLate text="Check-in" />
            </p>
            <p className={s.text} style={{ margin: "0", fontWeight: "700" }}>
              <WithTransLate text={formatDate(firstDay)} />
            </p>
            <p className={s.text} style={{ margin: "0", fontWeight: "300" }}>
              16:00 - 19:00
            </p>
          </div>
          <div className={s.divider}></div>
          <div className={s.partDate}>
            <p className={s.text} style={{ margin: "0", fontSize: "20px" }}>
              <WithTransLate text="Check-out" />
            </p>
            <p className={s.text} style={{ margin: "0", fontWeight: "700" }}>
              <WithTransLate text={formatDate(secondDay)} />
            </p>
            <p className={s.text} style={{ margin: "0", fontWeight: "300" }}>
              10:00 - 12-00
            </p>
          </div>
        </div>

        <p
          className={s.text}
          style={{
            margin: "0",
            marginLeft: "40px",
            marginRight: "40px",
            marginBottom: "30px",
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          <WithTransLate text="Blue House B&B" />
        </p>

        <div className={s.photoWrapper}>
          <div
            className={s.photo}
            style={{
              backgroundImage: apartmentPhoto
                ? `url(${apartmentPhoto})`
                : `url(${placeholder})`,
            }}
          ></div>
          <div>
            <div className={s.ratingTitle}>
              <img
                src={google}
                alt="Google"
                style={{ width: "24px", height: "24px" }}
              />
              <WithTransLate text="Google rating" />
            </div>
            <div className={s.ratingDetail}>
              <p className={s.regularText}>
                <WithTransLate
                  text={`★ ${averageRating.toFixed(1)} (
            ${totalReviews} reviews)`}
                />
              </p>
              <p className={s.titleText}>
                <WithTransLate
                  text={appartmentName ? appartmentName : "No name"}
                />
              </p>
              <p className={s.regularText}>
                <WithTransLate text="Valhúsabraut 19, 170 Reykjavík, Iceland" />
              </p>
              <div className={s.services}>
                <img
                  src={parking}
                  alt="Parking"
                  style={{ width: "24px", height: "24px" }}
                />
                <WithTransLate text="Free parking" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.partContent}>
        <GoodToKnow
          title={appartmentName ? appartmentName : "Economy Double Room"}
        />
      </div>
      <div className={s.btnWrapper}>
        <Button
          text="Proceed to payment details"
          btnClass="btnDark"
          handleClick={() => dispatch(setPaymentStage(2))}
        />
      </div>
    </div>
  );
};

export default BookingDetailsPart;
