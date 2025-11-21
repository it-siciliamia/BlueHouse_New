import PropTypes from "prop-types";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from "./SliderSlick.module.scss";
import useBreakpoints from "../../../Styles/useBreakpointsNew.js";

const PhotoSlider = ({ photos, width = "100%", height = "auto" }) => {
  const { isSmallScreen, isDesktop } = useBreakpoints();

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button className={`${className} ${s.slickPrev}`} style={{ ...style }} onClick={onClick}>
        <FiChevronLeft className={s.btnIconLeft} />
      </button>
    );
  };
  CustomPrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <button className={`${className} ${s.slickNext}`} style={{ ...style }} onClick={onClick}>
        <FiChevronRight className={s.btnIconRight} />
      </button>
    );
  };
  CustomNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  const settings = {
    dots: isDesktop || isSmallScreen ? true : false,
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: isDesktop || isSmallScreen ? true : false,
    dotsClass: `slick-dots ${s.customDots}`,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className={s.sliderContainer} style={{ width, height }}>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index} className={s.sliderItem} style={{ border: "1px solid green" }}>
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

PhotoSlider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
