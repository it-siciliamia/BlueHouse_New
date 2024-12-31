import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../../components/helpers/translating/LanguageContext";
import DatePicker from "react-datepicker";
import {
  WithTransLate,
  translateMyText,
} from "../../../components/helpers/translating/index";
import {
  setCheckIn,
  setCheckOut,
  setAddParams,
} from "../../../redux/dataSearch/dataSearch-slice";
import {
  getCheckInDay,
  getCheckOutDay,
  getAddParams,
} from "../../../redux/dataSearch/datesSearch-selectors";
import Button from "../../../components/Shared/Button/Button";
import "react-datepicker/dist/react-datepicker.css";
import minusIcon from "../../../images/roombooking/minus.svg";
import plusIcon from "../../../images/roombooking/plus.svg";
import arrowDown from "../../../images/roombooking/ArrowDown.svg";
import arrowUp from "../../../images/roombooking/ArrowUp.svg";
import alert from "../../../images/roombooking/alert.svg";
import * as moment from "moment";

import s from "./PartCalendar.module.scss";

const PartCalendar = () => {
  let newDate = moment().format("YYYYMMDD");
  const dispatch = useDispatch();
  const firstDay = useSelector(getCheckInDay);
  const secondDay = useSelector(getCheckOutDay);

  const [startDate, setStartDate] = useState(
    firstDay && secondDay && firstDay === newDate
      ? null
      : moment(firstDay, "YYYYMMDD").toDate()
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
  const [isShowWarning, setIsShowWarning] = useState(false);
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

  useEffect(() => {
    if (newDate !== firstDay && newDate !== secondDay) {
      setIsShowWarning(false);
    } else {
      setIsShowWarning(true);
    }
  }, [firstDay, secondDay]);

  return (
    <div className={s.calendar}>
      <h3 className={s.calendarTitle}>
        <WithTransLate text={"Your stay"} />
      </h3>
      <div className={s.warningContainer}>
        {isShowWarning && (
          <div className={s.warning}>
            <img src={alert} alt="Alert" />
            <span>
              <WithTransLate text={"Please, select the date"} />
            </span>
          </div>
        )}
      </div>
      <div className={s.dateContainerWrapper}>
        <div className={s.dateContainer}>
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
            className={s.dateRangeInput}
          />
          <span className={s.calendarIcon}></span>
        </div>
        <div className={s.dateContainer}>
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
            className={s.dateRangeInput}
          />
          <span className={s.calendarIcon}></span>
        </div>
      </div>
      <div className={s.searchContainer}>
        <div className={s.searchContainerText}>
          <WithTransLate
            text={`${adultsAmount} adults, ${
              childrenAmount || "no"
            } child, ${roomsAmount} room(s)`}
          />
        </div>
        <button className={s.toggleBtn} onClick={toggleHandle}>
          <img src={containerToggle ? arrowUp : arrowDown} alt="Toggle" />
        </button>
        {containerToggle && (
          <div
            className={s.quantityContainer}
            style={{ zIndex: "2", marginTop: "8px" }}
          >
            <div className={s.quantityElement} style={{ borderTop: "none" }}>
              <span style={{ textTransform: "capitalize" }}>
                <WithTransLate text="Adults" />
              </span>
              <div className={s.quantityContent}>
                <button
                  onClick={() => handleDecrement(setAdultsAmount, adultsAmount)}
                  className={s.countPerson}
                >
                  <img src={minusIcon} alt="Minus" />
                </button>
                <span>{adultsAmount}</span>
                <button
                  onClick={() => handleIncrement(setAdultsAmount, adultsAmount)}
                  className={s.countPerson}
                >
                  <img src={plusIcon} alt="Plus" />
                </button>
              </div>
            </div>
            <div className={s.quantityElement}>
              <span style={{ textTransform: "capitalize" }}>
                <WithTransLate text="Children" />
              </span>
              <div className={s.quantityContent}>
                <button
                  onClick={() =>
                    handleDecrement(setChildrenAmount, childrenAmount)
                  }
                  className={s.countPerson}
                >
                  <img src={minusIcon} alt="Minus" />
                </button>
                <span>{childrenAmount}</span>
                <button
                  onClick={() =>
                    handleIncrement(setChildrenAmount, childrenAmount)
                  }
                  className={s.countPerson}
                >
                  <img src={plusIcon} alt="Plus" />
                </button>
              </div>
            </div>
            <div className={s.quantityElement}>
              <span style={{ textTransform: "capitalize" }}>
                <WithTransLate text="Rooms" />
              </span>
              <div className={s.quantityContent}>
                <button
                  onClick={() => handleDecrement(setRoomsAmount, roomsAmount)}
                  className={s.countPerson}
                >
                  <img src={minusIcon} alt="Minus" />
                </button>
                <span>{roomsAmount}</span>
                <button
                  onClick={() => handleIncrement(setRoomsAmount, roomsAmount)}
                  className={s.countPerson}
                >
                  <img src={plusIcon} alt="Plus" />
                </button>
              </div>
            </div>
            <div
              className={s.submitAmountWrapper}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className={s.submitAmount}
                style={{ width: "218px" }}
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
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button text="SEARCH" btnClass="btnDark" width="218px" />
      </div>
    </div>
  );
};

export default PartCalendar;
