import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { WithTransLate } from "../helpers/translating/index";
import insta01 from "../../images/instagramSVG/insta01.webp";
import insta02 from "../../images/instagramSVG/insta02.webp";
import insta03 from "../../images/instagramSVG/insta03.webp";
import insta04 from "../../images/instagramSVG/insta04.webp";
import insta05 from "../../images/instagramSVG/insta05.webp";
import insta06 from "../../images/instagramSVG/insta06.webp";
import insta07 from "../../images/instagramSVG/insta07.webp";
import insta08 from "../../images/instagramSVG/insta08.webp";
import insta09 from "../../images/instagramSVG/insta09.webp";
import insta10 from "../../images/instagramSVG/insta10.webp";
import insta11 from "../../images/instagramSVG/insta11.webp";
import insta12 from "../../images/instagramSVG/insta12.webp";
import insta13 from "../../images/instagramSVG/insta13.webp";
import insta14 from "../../images/instagramSVG/insta14.webp";
import insta15 from "../../images/instagramSVG/insta15.webp";
import insta16 from "../../images/instagramSVG/insta16.webp";
import insta17 from "../../images/instagramSVG/insta17.webp";
import insta18 from "../../images/instagramSVG/insta18.webp";
import insta19 from "../../images/instagramSVG/insta19.webp";
import insta20 from "../../images/instagramSVG/insta20.webp";
import insta21 from "../../images/instagramSVG/insta21.webp";
import s from "./FollowUs.module.scss";
import Button from "../Shared/Button/Button";

const FollowUs = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 959.99 });

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  const data = [
    insta01,
    insta02,
    insta03,
    insta04,
    insta05,
    insta06,
    insta07,
    insta08,
    insta09,
    insta10,
    insta11,
    insta12,
    insta13,
    insta14,
    insta15,
    insta16,
    insta17,
    insta18,
    insta19,
    insta20,
    insta21,
  ];

  const totalSlides = Math.ceil(
    isTablet ? (data.length - 1) / itemsPerPage : data.length / itemsPerPage
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerPage]);

  const displayedItems = data.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section id="follow Us" className={s.followus}>
      <div className={s.sectionWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>
            <WithTransLate text="INSTAGRAM" />
          </h2>
        </div>
        <div className={s.sectionContent}>
          {displayedItems.map((image, index) => (
            <div key={index} className={s.recommendationItem}>
              <img
                alt="Foto from Instagram"
                src={image}
                className={s.image}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={s.sliderBtnWrapper}>
        <div className={s.navigation}>
          <button
            onClick={prevSlide}
            className={`${s.arrow} ${s.buttonPrev}`}
            title="Previous review"
          ></button>
          <button
            onClick={nextSlide}
            className={`${s.arrow} ${s.buttonNext}`}
            title="Next review"
          ></button>
        </div>
      </div>
      <div className={s.btnWrapper}>
        <Button
          text="Follow us"
          btnClass="btnLightWithOut"
          handleClick={() =>
            window.open("https://www.instagram.com/bluehousebb/", "_blank")
          }
        />
      </div>
    </section>
  );
};

export default FollowUs;
