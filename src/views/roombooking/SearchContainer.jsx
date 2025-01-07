import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../components/helpers/translating/LanguageContext";
import DatePicker from "react-datepicker";
import {
  WithTransLate,
  translateMyText,
} from "../../components/helpers/translating/index";
import {
  setCheckIn,
  setCheckOut,
  setAddParams,
} from "../../redux/dataSearch/dataSearch-slice";
import {
  getCheckInDay,
  getCheckOutDay,
  getAddParams,
} from "../../redux/dataSearch/datesSearch-selectors";
import "react-datepicker/dist/react-datepicker.css";
import minusIcon from "../../images/roombooking/minus.svg";
import plusIcon from "../../images/roombooking/plus.svg";
import arrowDown from "../../images/roombooking/ArrowDown.svg";
import arrowUp from "../../images/roombooking/ArrowUp.svg";
import * as moment from "moment";

const SearchContainer = () => {
  let newDate = moment().format("YYYYMMDD");
  const dispatch = useDispatch();
  const firstDay = useSelector(getCheckInDay);
  const secondDay = useSelector(getCheckOutDay);

  const [startDate, setStartDate] = useState(
    firstDay === secondDay ? null : moment(firstDay, "YYYYMMDD").toDate()
  );

  const [endDate, setEndDate] = useState(
    firstDay && secondDay && secondDay === newDate
      ? null
      : moment(secondDay, "YYYYMMDD").toDate()
  );
  const addParams = useSelector(getAddParams);
  const [containerToggle, setContainerToggle] = useState(false);
  const [adultsAmount, setAdultsAmount] = useState(addParams.adult);
  const [childrenAmount, setChildrenAmount] = useState(addParams.children);
  const [roomsAmount, setRoomsAmount] = useState(addParams.room);
  const languageIndex = useLanguage();

  const [placeholderText1, setPlaceholderText1] = useState("Check in");
  const [placeholderText2, setPlaceholderText2] = useState("Check out");

  const handleIncrement = (setter, value) => setter(value + 1);
  const handleDecrement = (setter, value) => value > 0 && setter(value - 1);

  const toggleHandle = () => setContainerToggle(!containerToggle);

  useEffect(() => {
    const fetchPlaceholders = async () => {
      try {
        const translatedCheckIn = await translateMyText("Check in");
        const translatedCheckOut = await translateMyText("Check out");
        setPlaceholderText1(translatedCheckIn);
        setPlaceholderText2(translatedCheckOut);
      } catch (error) {
        console.error("Error translating placeholders:", error);
      }
    };

    fetchPlaceholders();
  }, [languageIndex]);

  return (
    <div className="search-component">
      <div className="search-wrapper">
        <h2 className="booking-title">
          <WithTransLate text="Book your stay with Blue house" />
        </h2>
        <div className="content">
          <div className="search">
            <div className="search-container">
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
                className="date-range__input"
              />
              <span className="calendar-icon"></span>
            </div>
            <div className="search-container">
              <DatePicker
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date);
                  dispatch(setCheckOut(date));
                }}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText={placeholderText2}
                className="date-range__input"
              />
              <span className="calendar-icon"></span>
            </div>
            <div className="search-container quantity">
              <div className="search-container-text">
                <WithTransLate
                  text={`${adultsAmount} adults, ${
                    childrenAmount || "no"
                  } child, ${roomsAmount} room(s)`}
                />
              </div>
              <button
                className="quantity-container-toggle-btn"
                onClick={toggleHandle}
              >
                <img src={containerToggle ? arrowUp : arrowDown} alt="Toggle" />
              </button>
              {containerToggle && (
                <div className="quantity-container">
                  <div
                    className="quantity-element"
                    style={{ borderTop: "none" }}
                  >
                    <span style={{ textTransform: "capitalize" }}>
                      <WithTransLate text="Adults" />
                    </span>
                    <div className="quantity-content">
                      <button
                        onClick={() =>
                          handleDecrement(setAdultsAmount, adultsAmount)
                        }
                        className="count-person decrement-btn"
                      >
                        <img src={minusIcon} alt="Minus" />
                      </button>
                      <span>{adultsAmount}</span>
                      <button
                        onClick={() =>
                          handleIncrement(setAdultsAmount, adultsAmount)
                        }
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
                        onClick={() =>
                          handleDecrement(setChildrenAmount, childrenAmount)
                        }
                        className="count-person decrement-btn"
                      >
                        <img src={minusIcon} alt="Minus" />
                      </button>
                      <span>{childrenAmount}</span>
                      <button
                        onClick={() =>
                          handleIncrement(setChildrenAmount, childrenAmount)
                        }
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
                        onClick={() =>
                          handleDecrement(setRoomsAmount, roomsAmount)
                        }
                        className="count-person decrement-btn"
                      >
                        <img src={minusIcon} alt="Minus" />
                      </button>
                      <span>{roomsAmount}</span>
                      <button
                        onClick={() =>
                          handleIncrement(setRoomsAmount, roomsAmount)
                        }
                        className="count-person increment-btn"
                      >
                        <img src={plusIcon} alt="Plus" />
                      </button>
                    </div>
                  </div>
                  <div className="submit-amount-wrapper">
                    <button
                      className="submit-amount"
                      style={{ width: "100%" }}
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
                      <WithTransLate text="UPDATE" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="search-container search-btn-container">
              <button className="search-btn" style={{ paddingTop: "5px" }}>
                <WithTransLate text="SEARCH" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
