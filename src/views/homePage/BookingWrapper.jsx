import React from "react";
import "./BookingWrapper.css";
import { WithTransLate } from "../../translating";

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
          <button className="inline">
            <WithTransLate text="Book Your Room" />
          </button>
        </a>
        <div className="ordial">
          <hr />
          <p>
            <WithTransLate text="OR" />
          </p>
          <hr />
        </div>
        <a href="https://bluehouse.tourdesk.is/Tour">
          <button className="outline">
            <WithTransLate text="Book Day Tours" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default BookingWrapper;
