import React, { useState } from "react";
import { useSelector } from "react-redux";
import { WithTransLate } from "../../helpers/translating";
import {
  getDayDifference,
  getCheckInDay,
  getCheckOutDay,
  getAppartmentName,
  getTotalAmountCurrency,
  getCurrency,
} from "../../../redux/dataSearch/dataSearch-selectors";
import PartCalendar from "../../../views/RoomDetails/PartCalendar/PartCalendar";
import AddServices from "../UserPaymentDetails/AddServices/AddServices";
import { items } from "../../ServicesRoom/ServicesRoomData";
import placeholder from "../../../images/homePageSlider/placeholder.webp";
import { googleRatings } from "../../../views/roombooking/RoomBooking";
import google from "../../../images/google.png";
import moment from "moment";

import s from "./BookingDetailsPart2.module.scss";

const BookingDetailsPart2 = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const dayDifference = useSelector(getDayDifference);
  const firstDay = useSelector(getCheckInDay);
  const secondDay = useSelector(getCheckOutDay);
  const appartmentName = useSelector(getAppartmentName);
  const totalAmountCurrency = useSelector(getTotalAmountCurrency);
  const selectedCurrency = useSelector(getCurrency);

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
        <div className={s.bookingWrapper} style={{ position: "relative" }}>
          <h2 className={s.title}>
            <WithTransLate text="Booking Summary" />
          </h2>
          <div className={s.leftPartWrapperTop}>
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

        <div className={s.photoWrapper}>
          <div
            className={s.photo}
            style={{
              backgroundImage: apartmentPhoto
                ? `url(${apartmentPhoto})`
                : `url(${placeholder})`,
            }}
          ></div>
          <div className={s.detailWrapper}>
            <div className={s.ratingWrapper}>
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
              </div>
            </div>
          </div>
        </div>

        <div className={s.partText}>
          <p className={s.textBold} style={{ margin: "0" }}>
            <WithTransLate text="Total length of stay:" />
          </p>
          <p className={s.textRegular} style={{ margin: "0" }}>
            <WithTransLate
              text={`${dayDifference} ${
                dayDifference === 1 ? "night" : "nights"
              }`}
            />
          </p>
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

        <div className={s.addServices}>
          <AddServices />
        </div>

        <div className={s.verticalDivider}></div>

        <div className={s.priceWrapper}>
          <p
            style={{
              margin: "0",
              fontSize: "20px",
              fontWeight: "700",
              color: "black",
            }}
          >
            <WithTransLate text="Total" />
          </p>
          <div className={s.leftPartWrapper}>
            <p
              style={{
                margin: "0",
                fontSize: "20px",
                fontWeight: "500",
                color: "black",
              }}
            >
              <WithTransLate
                text={`${selectedCurrency} ${totalAmountCurrency}`}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsPart2;
