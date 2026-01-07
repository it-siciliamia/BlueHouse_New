import { useState, useEffect, useRef } from "react";

import s from "./CaruselSliderHome.module.scss";
import IconButton from "../../../components/Shared/ui/IconButton.jsx";
import posterSrc from "../../../images/homePageSlider/intro-poster.jpg";
import slide01 from "../../../images/homePageSlider/slide1.png";
import slide02 from "../../../images/homePageSlider/slide2.png";
import slide03 from "../../../images/homePageSlider/slide3.png";
import slide04 from "../../../images/homePageSlider/slide4.png";
import slide05 from "../../../images/homePageSlider/slide5.png";
import slide06 from "../../../images/homePageSlider/slide6.png";
import videoSrc from "../../../videos/intro.mp4";

const images = [videoSrc, slide01, slide02, slide03, slide04, slide05, slide06];
const texts = [
  "a home away from home",
  "located in a beautiful peninsulae",
  "close to all natural atractions",
  "only 5 minutes from downtown Reykyavik",
  "Amazing spot for northern lights",
  "3 locations on the same street",
];

export default function CaruselSliderHome() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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
              className={`${s.paginationDot} ${
                index === currentIndex ? s.paginationDotActive : ""
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={s.imageBox}>
      <IconButton
        icon="chevronLeft"
        size="lg"
        onClick={goToPreviousSlide}
        className={s.arrowButtonLeft}
      />
      {images.map((image, index) =>
        <div key={index} className={s.slideContainer}>
          {index === 0 ? (
            <video
              ref={videoRef}
              className={`${s.image} ${index === currentIndex ? s.currentImage : ""}`}
              style={{ display: index === currentIndex ? "block" : "none" }}
              src={image}
              poster={posterSrc}
              muted
            />
          ) : (
            <>
              <img
                className={`${s.image} ${index === currentIndex ? s.currentImage : ""}`}
                src={image}
                alt="Carousel"
                style={{ zIndex: index === currentIndex ? 1 : 0 }}
              />
              <h3 className={`${s.slideText} ${index === currentIndex ? s.slideTextVisible : ""}`}>
                {texts[index - 1]}
              </h3>
            </>
          )}
        </div>
      )}
      <IconButton
        icon="chevronRight"
        size="lg"
        onClick={goToNextSlide}
        className={s.arrowButtonRight}
      />
      {renderPagination()}
    </div>
  );
}
