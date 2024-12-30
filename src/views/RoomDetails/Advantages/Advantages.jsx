import React from "react";
import { useMediaQuery } from "react-responsive";
import { WithTransLate } from "../../../components/helpers/translating";
import dollarSign from "../../../images/roombooking/dollarsign.svg";
import spotSign from "../../../images/roombooking/spotSign.svg";
import busSign from "../../../images/roombooking/busSign.svg";
import carSign from "../../../images/roombooking/carSign.svg";
import planeSign from "../../../images/roombooking/planeSign.svg";
import timeSign from "../../../images/roombooking/timeSign.svg";

import s from "./Advantages.module.scss";

const Advantages = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  // const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 959.99 });
  // const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });
  return (
    <section className={s.advantagesWrapper}>
      <div className={s.advantagesContainer}>
        <ul className={s.advantagesList}>
          <li className={s.advantagesItem}>
            <img
              src={dollarSign}
              alt="dollar icon"
              className={s.advantagesIcons}
            />
            <p className={s.advantagesText}>
              <WithTransLate text="Best Price Guarantee" />
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img
              src={spotSign}
              alt="dollar icon"
              className={s.advantagesIcons}
            />
            <p className={s.advantagesText}>
              <WithTransLate text="Popular Spot for Northern Lights" />
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img
              src={busSign}
              alt="dollar icon"
              className={s.advantagesIcons}
            />
            <p className={s.advantagesText}>
              <WithTransLate text="3 Min Walk to Bus Stop" />
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img
              src={carSign}
              alt="dollar icon"
              className={s.advantagesIcons}
            />
            <p className={s.advantagesText}>
              <WithTransLate text="5 Min Drive from Town" />
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img
              src={planeSign}
              alt="dollar icon"
              className={s.advantagesIcons}
            />
            <p className={s.advantagesText}>
              <WithTransLate text="45 Min Drive from Airport" />
            </p>
          </li>
          <li className={s.advantagesItem}>
            <img
              src={timeSign}
              alt="dollar icon"
              className={s.advantagesIcons}
            />
            <p className={s.advantagesText}>
              <WithTransLate text="Late Night Self Check In" />
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
