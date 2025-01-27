import React from "react";
import Button from "../../components/Shared/Button/Button";
import "./BookingWrapper.css";
import { WithTransLate } from "../../components/helpers/translating";

const BookingWrapper = () => {
  return (
    <div className="BookingWrapper_container">
      <p>
        <span>
          <WithTransLate text="Blue House Bed and Breakfast" />
        </span>{" "}
        <WithTransLate text=" welcomes you to your home away from home in" />{" "}
        <span>
          <WithTransLate text="Reykjavik, Iceland." />
        </span>{" "}
        <WithTransLate
          text="Simply put, we are a small team of
        globetrotters, passionate about unforgettable travel experiences."
        />
      </p>
      <div className="buttons">
        <a href="https://beds24.com/booking2.php?propid=3578&layout=1">
          <Button text="BOOK YOUR ROOM" btnClass="btnDark" width="218px" />
        </a>
        <div className="ordial">
          <hr />
          <p style={{ color: "#1d3967" }}>
            <WithTransLate text="OR" />
          </p>
          <hr />
        </div>
        <a href="https://bluehouse.tourdesk.is/Tour">
          <Button text="Book Day Tours" btnClass="btnLight" width="218px" />
        </a>
      </div>
    </div>
  );
};

export default BookingWrapper;
