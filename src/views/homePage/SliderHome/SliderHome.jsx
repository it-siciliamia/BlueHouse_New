import React, { useState, useEffect, useRef } from "react";
import slide01 from "../../../images/homePageSlider/slide1.jpg";
import slide02 from "../../../images/homePageSlider/slide2.jpg";
import slide03 from "../../../images/homePageSlider/slide3.jpg";
import slide04 from "../../../images/homePageSlider/slide4.jpg";
import slide05 from "../../../images/homePageSlider/slide5.jpg";
import slide06 from "../../../images/homePageSlider/slide6.jpg";
import videoSrc from "../../../videos/intro.mp4";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import s from "./SliderHome.module.scss";

const images = [videoSrc, slide01, slide02, slide03, slide04, slide05, slide06];

const SliderHome = ({ viewportWidth }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  const dynamicWidth = Math.round(viewportWidth * 0.75);

  useEffect(() => {
    if (currentIndex === 0 && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Video play was prevented:", error);
        });
      }
      videoRef.current.onended = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleIndicatorClick = (index) => {
    goToSlide(index);
  };

  const renderPagination = () => {
    return (
      <div className={s.pagination}>
        <div className={s.paginationBox}>
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleIndicatorClick(index)}
              style={{
                opacity: index === currentIndex ? 1 : 0.3,
              }}
              className={s.paginationDot}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className={s.container}
      style={{ width: dynamicWidth ? `${dynamicWidth}px` : "1085px" }}
    >
      <div className={s.imageBox}>
        <div
          className={`${s.arrowButton} ${s.arrowButtonLeft}`}
          onClick={goToPreviousSlide}
        >
          <FiChevronLeft
            size={60}
            strokeWidth={1}
            className={s.arrowlinkLeft}
          />
        </div>
        {images.map((image, index) =>
          index === 0 ? (
            <video
              key={index}
              ref={videoRef}
              className={`${s.image} ${
                index === currentIndex ? s.currentImage : ""
              }`}
              style={{ display: index === currentIndex ? "block" : "none" }}
              src={image}
              muted
              controls
            />
          ) : (
            <img
              key={index}
              className={`${s.image} ${
                index === currentIndex ? s.currentImage : ""
              }`}
              src={image}
              alt="Carousel"
              style={{ zIndex: index === currentIndex ? 1 : 0 }}
            />
          )
        )}
        <div
          className={`${s.arrowButton} ${s.arrowButtonRight}`}
          onClick={goToNextSlide}
        >
          <FiChevronRight
            size={60}
            strokeWidth={1}
            className={s.arrowlinkRigth}
          />
        </div>
        {renderPagination()}
      </div>
    </div>
  );
};

export default SliderHome;
