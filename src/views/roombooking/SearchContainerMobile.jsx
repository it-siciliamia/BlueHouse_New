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

  // Ref for the quantity-container behavior
  const quantityContainerRef = useRef(null);

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

  // Close quantity-container when clicking outside
  useEffect(() => {
    if (!containerToggle) return;

    const handleClickOutside = (event) => {
      if (quantityContainerRef.current && !quantityContainerRef.current.contains(event.target)) {
        setContainerToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerToggle]);

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

        <div className="content-mobile">
          <div className="search-container-mobile checkin-mobile">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                dispatch(setCheckIn(date));
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
              popperModifiers={[
                {
                  /*prevents the calendar from flipping*/ name: "flip",
                  enabled: false,
                },
              ]}
            />
            <span className="calendar-icon"></span>
          </div>
          <div className="search-container-mobile checkout-mobile">
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                dispatch(setCheckOut(date));
              }}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText={placeholderText2}
              className="date-range__input"
              minDate={startDate || new Date()}
              dateFormat="dd MMM, yyyy"
              calendarStartDay={1}
              showDisabledMonthNavigation
              formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 3)}
              /*positions the calendar aligned to the input`s end*/
              popperPlacement="bottom-end"
              popperModifiers={[
                {
                  /*prevents the calendar from flipping*/ name: "flip",
                  enabled: false,
                },
              ]}
            />
            <span className="calendar-icon"></span>
          </div>
          <div
            className="search-container quantity"
            ref={quantityContainerRef}
            onClick={() => {
              setSearchContainerClicked(true);
              /*opens the quantity-container when the search-container is clicked*/
              if (!containerToggle) {
                toggleHandle();
              }
            }}
          >
            <div
              className="search-container-text"
              style={searchContainerClicked ? { fontWeight: "500" } : { fontWeight: "300" }}
            >
              <WithTransLate
                text={`${adultsAmount} adults, ${
                  (childrenAmount && childrenAmount == 1 + " child,") ||
                  childrenAmount > 1 + " children," ||
                  ""
                } ${roomsAmount} room(s)`}
              />
            </div>
            <button className="quantity-container-toggle-btn" onClick={toggleHandle}>
              <img src={containerToggle ? arrowUp : arrowDown} alt="Toggle" />
            </button>
            {!!containerToggle && (
              <div
                className="quantity-container"
                // style={{ zIndex: "2", marginTop: "8px" }}
              >
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
                    <span className="amount-display">{adultsAmount}</span>
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
                    <span className="amount-display">{childrenAmount}</span>
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
                    <span className="amount-display">{roomsAmount}</span>
                    <button
                      onClick={() => handleIncrement(setRoomsAmount, roomsAmount)}
                      className="count-person increment-btn"
                    >
                      <img src={plusIcon} alt="Plus" />
                    </button>
                  </div>
                </div>
                <div
                  className="submit-amount-wrapper"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    className="submit-amount"
                    // style={{ width: "218px" }}
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
          </div>
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
