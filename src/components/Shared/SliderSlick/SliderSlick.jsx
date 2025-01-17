import React from "react";
import Slider from "react-slick";
import useBreakpoints from "../../../Styles/useBreakpoints";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import s from "./SliderSlick.module.scss";

const PhotoSlider = ({ photos, width = "100%", height = "auto" }) => {
  const { isLaptop, isDesktop } = useBreakpoints();

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} ${s.slickPrev}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FiChevronLeft className={s.btnIconLeft} />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button
        className={`${className} ${s.slickNext}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FiChevronRight className={s.btnIconRight} />
      </button>
    );
  };

  const settings = {
    dots: isDesktop || isLaptop ? true : false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: isDesktop || isLaptop ? true : false,
    dotsClass: `slick-dots ${s.customDots}`,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className={s.sliderContainer} style={{ width, height }}>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={s.sliderItem}
            style={{ border: "1px solid green" }}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className={s.sliderImage}
              style={{ width: "100%", height, objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoSlider;
