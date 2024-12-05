import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Button from "../../components/Shared/Button/Button";
import { WithTransLate } from "../helpers/translating/index";
import selfie from "../../images/selfie.webp";
import s from "./AboutUs.module.scss";

function AboutUs() {
  const isMobile = useMediaQuery({ maxDeviceWidth: 767 });
  return (
    <section id="ABOUTUS">
      <div className={s.about}>
        <h2 className={s.titleStyle}>
          <WithTransLate text="ABOUT US" />
        </h2>
        <div className={s.content}>
          <div className={s.outLinedImage}>
            {!isMobile && <div className={s.outLinedImageShdow}></div>}
            <img className={s.selfieStyle} alt="selfie" src={selfie} />
          </div>
          <div className={s.descriptionWrapper}>
            <p className={s.description}>
              <WithTransLate text="Blue House Bed and Breakfast welcomes you to your home away from home in Reykjavik, Iceland. Simply put, we are a small team of globetrotters, passionate about unforgettable travel experiences." />
            </p>
            <Link to="/About-us">
              <Button
                text="DISCOVER MORE"
                btnClass="btnLight"
                width={isMobile ? "218px" : "280px"}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
