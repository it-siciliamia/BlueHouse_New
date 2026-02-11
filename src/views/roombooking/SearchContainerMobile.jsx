import moment from "moment";
import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";

import { WithTransLate, translateMyText } from "../../components/helpers/translating/index.jsx";
import { useLanguage } from "../../components/helpers/translating/LanguageContext.jsx";
import arrowDown from "../../images/roombooking/ArrowDown.svg";
import arrowUp from "../../images/roombooking/ArrowUp.svg";
import hero from "../../../public/assets/images/image1.jpg";
import minusIcon from "../../images/roombooking/minus.svg";
import plusIcon from "../../images/roombooking/plus.svg";
import {
  getCheckInDay,
  getCheckOutDay,
  getAddParams,
} from "../../redux/dataSearch/dataSearch-selectors.js";
import { setCheckIn, setCheckOut, setAddParams } from "../../redux/dataSearch/dataSearch-slice.js";
import BookingBtnWrapper from "../../components/BookingBtnWrapper/BookingBtnWrapper.jsx";
import "../../Styles/App.scss";
export const SearchContainerMobile = () => {
  let newDate = moment().format("YYYYMMDD");
  const dispatch = useDispatch();
  const firstDay = useSelector(getCheckInDay);
  const secondDay = useSelector(getCheckOutDay);

  const [startDate, setStartDate] = useState(
    firstDay && secondDay && firstDay === newDate ? null : moment(firstDay, "YYYYMMDD").toDate()
  );

  const [endDate, setEndDate] = useState(
    firstDay && secondDay && secondDay === newDate ? null : moment(secondDay, "YYYYMMDD").toDate()
  );
  const addParams = useSelector(getAddParams);
  const [containerToggle, setContainerToggle] = useState(false);
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [adultsAmount, setAdultsAmount] = useState(addParams.adult);
  const [childrenAmount, setChildrenAmount] = useState(addParams.children);
  const [roomsAmount, setRoomsAmount] = useState(addParams.room);
  const languageIndex = useLanguage();

  const [placeholderText1, setPlaceholderText1] = useState("Check-in");
  const [placeholderText2, setPlaceholderText2] = useState("Check-out");

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => value > 0 && setter(value - 1);

  const toggleHandle = () => setContainerToggle(!containerToggle);

  /*manages the state of the search container to change the fontweight instead of using a placeholder*/
  const [searchContainerClicked, setSearchContainerClicked] = useState(false);

  // Single ref for the entire content-mobile container
  const contentMobileRef = useRef(null);

  useEffect(() => {
    const fetchPlaceholders = async () => {
      try {
        const translatedCheckIn = await translateMyText("Check-in");
        const translatedCheckOut = await translateMyText("Check-out");
        setPlaceholderText1(translatedCheckIn);
        setPlaceholderText2(translatedCheckOut);
      } catch (error) {
        console.error("Error translating placeholders:", error);
      }
    };

    fetchPlaceholders();
  }, [languageIndex]);

  // Close all open sections when clicking outside content-mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contentMobileRef.current && !contentMobileRef.current.contains(event.target)) {
        setCheckInOpen(false);
        setCheckOutOpen(false);
        setContainerToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <BookingBtnWrapper />
      <div className="search-component-mobile">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${hero})` }}
          role="img"
          aria-label="Aurora over Icelandic landscape"
        />
        <h2 className="booking-title-mobile">
          <WithTransLate text="Book your stay with Blue house" />
        </h2>

        <div className="content-mobile" ref={contentMobileRef}>
          <div
            className="search-container-mobile checkin-mobile"
            onClick={() => {
              setCheckInOpen(!checkInOpen);
              setCheckOutOpen(false);
              setContainerToggle(false);
            }}
          >
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                dispatch(setCheckIn(date));
                setCheckInOpen(false);
              }}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText={placeholderText1}
              className={`date-range__input ${startDate ? "input-filled" : ""}`}
              minDate={new Date()}
              dateFormat="dd MMM, yyyy"
              calendarStartDay={1}
              showDisabledMonthNavigation
              formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
              open={false}
            />
            <span className="calendar-icon"></span>
          </div>
          {checkInOpen && (
            <div className="inline-datepicker-wrapper">
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  dispatch(setCheckIn(date));
                  setCheckInOpen(false);
                }}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                dateFormat="dd MMM, yyyy"
                calendarStartDay={1}
                showDisabledMonthNavigation
                formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
                inline
              />
            </div>
          )}
          <div
            className="search-container-mobile checkout-mobile"
            onClick={() => {
              setCheckOutOpen(!checkOutOpen);
              setCheckInOpen(false);
              setContainerToggle(false);
            }}
          >
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                dispatch(setCheckOut(date));
                setCheckOutOpen(false);
              }}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText={placeholderText2}
              className={`date-range__input ${endDate ? "input-filled" : ""}`}
              minDate={startDate || new Date()}
              dateFormat="dd MMM, yyyy"
              calendarStartDay={1}
              showDisabledMonthNavigation
              formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
              open={false}
            />
            <span className="calendar-icon"></span>
          </div>
          {checkOutOpen && (
            <div className="inline-datepicker-wrapper">
              <DatePicker
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date);
                  dispatch(setCheckOut(date));
                  setCheckOutOpen(false);
                }}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate || new Date()}
                dateFormat="dd MMM, yyyy"
                calendarStartDay={1}
                showDisabledMonthNavigation
                formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
                inline
              />
            </div>
          )}
          <div
            className="search-container quantity"
            onClick={() => {
              setSearchContainerClicked(true);
              setCheckInOpen(false);
              setCheckOutOpen(false);
              toggleHandle();
            }}
          >
            <div className="search-container-text">
              <WithTransLate
                text={`${adultsAmount} adults, ${
                  (childrenAmount && childrenAmount == 1 + " child,") ||
                  childrenAmount > 1 + " children," ||
                  ""
                } ${roomsAmount} room(s)`}
              />
            </div>
            <button
              className="quantity-container-toggle-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleHandle();
              }}
            >
              <img src={containerToggle ? arrowUp : arrowDown} alt="Toggle" />
            </button>
          </div>
          {!!containerToggle && (
            <div className="quantity-container-inline">
              <div className="quantity-element">
                <span style={{ textTransform: "capitalize" }}>
                  <WithTransLate text="Adults" />
                </span>
                <div className="quantity-content">
                  <button
                    onClick={() => handleDecrement(setAdultsAmount, adultsAmount)}
                    className="count-person decrement-btn"
                  >
                    <img src={minusIcon} alt="Minus" />
                  </button>
                  <span className={`amount-display ${adultsAmount === 0 ? "zero" : ""}`}>
                    {adultsAmount}
                  </span>
                  <button
                    onClick={() => handleIncrement(setAdultsAmount, adultsAmount)}
                    className="count-person increment-btn"
                  >
                    <img src={plusIcon} alt="Plus" />
                  </button>
                </div>
              </div>
              <div className="quantity-element">
                <span style={{ textTransform: "capitalize" }}>
                  <WithTransLate text="Children" />
                </span>
                <div className="quantity-content">
                  <button
                    onClick={() => handleDecrement(setChildrenAmount, childrenAmount)}
                    className="count-person decrement-btn"
                  >
                    <img src={minusIcon} alt="Minus" />
                  </button>
                  <span className={`amount-display ${childrenAmount === 0 ? "zero" : ""}`}>
                    {childrenAmount}
                  </span>
                  <button
                    onClick={() => handleIncrement(setChildrenAmount, childrenAmount)}
                    className="count-person increment-btn"
                  >
                    <img src={plusIcon} alt="Plus" />
                  </button>
                </div>
              </div>
              <div className="quantity-element">
                <span style={{ textTransform: "capitalize" }}>
                  <WithTransLate text="Rooms" />
                </span>
                <div className="quantity-content">
                  <button
                    onClick={() => handleDecrement(setRoomsAmount, roomsAmount)}
                    className="count-person decrement-btn"
                  >
                    <img src={minusIcon} alt="Minus" />
                  </button>
                  <span className={`amount-display ${roomsAmount === 0 ? "zero" : ""}`}      >
                    {roomsAmount}
                  </span>
                  <button
                    onClick={() => handleIncrement(setRoomsAmount, roomsAmount)}
                    className="count-person increment-btn"
                  >
                    <img src={plusIcon} alt="Plus" />
                  </button>
                </div>
              </div>
              <div className="submit-amount-wrapper">
                <button
                  className="submit-amount"
                  onClick={() => {
                    setContainerToggle(false);
                    dispatch(
                      setAddParams({
                        adult: adultsAmount,
                        children: childrenAmount,
                        room: roomsAmount,
                      })
                    );
                  }}
                >
                  <WithTransLate text="DONE" />
                </button>
              </div>
            </div>
          )}
          <div
            className="search-container search-btn-container"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="search-btn">
              <WithTransLate text="SEARCH" />
            </button>
          </div>
          {/* Error Message */}
          {!!startDate && !!endDate && startDate >= endDate && (
            <div className="search-container-error-message">
              <p>Check-in date must be before the check-out date.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchContainerMobile;
