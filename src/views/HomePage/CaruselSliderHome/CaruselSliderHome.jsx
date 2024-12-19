import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { getIsPlaceholderShown } from "../../../redux/technitial/technical-selectors.js";
import { setPlaceholderShown } from "../../../redux/technitial/technical-slice.js";
import slide01 from "../../../images/homePageSlider/slide1.webp";
import slide02 from "../../../images/homePageSlider/slide2.webp";
import slide03 from "../../../images/homePageSlider/slide3.webp";
import slide04 from "../../../images/homePageSlider/slide4.webp";
import slide05 from "../../../images/homePageSlider/slide5.webp";
import slide06 from "../../../images/homePageSlider/slide6.webp";
import placeholder from "../../../images/homePageSlider/placeholder.webp";
import videoSrc from "../../../videos/intro.mp4";
import { useHeaderSize } from "../../../components/helpers/HeaderContext/HeaderContext.js";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import s from "./CaruselSliderHome.module.scss";

const images = [videoSrc, slide01, slide02, slide03, slide04, slide05, slide06];

const CaruselSliderHome = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });
  const isLaplop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });

  const isPlaceholderShown = useSelector(getIsPlaceholderShown);
  const dispatch = useDispatch();
  const { width } = useHeaderSize();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [fadeOutPlaceholder, setFadeOutPlaceholder] = useState(false);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  const dynamicWidth = isDesktop
    ? Math.round(width - 365)
    : isLaplop
    ? Math.round(width - 115)
    : width;
  const dynamicHeigth = Math.round(dynamicWidth * 0.66);

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

  useEffect(() => {
    const handleCanPlayThrough = () => {
      setFadeOutPlaceholder(true);
      setTimeout(() => {
        dispatch(setPlaceholderShown(true));
        setShowPlaceholder(false);
      }, 2000);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("canplaythrough", handleCanPlayThrough);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough
        );
      }
    };
  }, [dispatch]);

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
      style={{
        width: isDesktop
          ? `${dynamicWidth}px`
          : isLaplop
          ? `${dynamicWidth}px`
          : "100%",
      }}
    >
      <div
        className={s.imageBox}
        style={{
          height: isMobile
            ? `${dynamicHeigth}px`
            : isTablet
            ? "400px"
            : isLaplop
            ? "500px"
            : "550px",
          overflow: "hidden",
        }}
      >
        {!isMobile && (
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
        )}
        {showPlaceholder && !isPlaceholderShown && (
          <img
            src={placeholder}
            alt="Placeholder"
            className={`${s.placeholder} ${
              fadeOutPlaceholder ? s.fadeOut : ""
            }`}
          />
        )}
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
        {!isMobile && (
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
        )}
        {renderPagination()}
      </div>
    </div>
  );
};

export default CaruselSliderHome;
