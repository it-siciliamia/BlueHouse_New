import { Swiper, SwiperSlide } from "swiper/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import s from "./SliderPreviewPhotoM.module.scss";

const SliderPreviewPhotoM = ({ photos }) => {
  return (
    <div style={{ position: "relative" }}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={false}
        scrollbar={{ draggable: true }}
        navigation={false}
        className={s.swiperContainer}
      >
        {photos.map((image, index) => (
          <SwiperSlide key={index} className={s.swiperSlide}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className={s.swiperSlideImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "2",
          height: "60px",
          width: "100%",
          fontSize: "15px",
          color: "white",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0,  0), rgba(0, 0, 0,  0.4), rgba(0, 0, 0, 0.8))",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        <div style={{ width: "150px", height: "auto" }}>
          <DotLottieReact
            src="https://lottie.host/910a4f04-df80-4b5e-9ace-0564c5005b2e/7RauUmHT2f.lottie"
            loop
            autoplay
            speed={0.6}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderPreviewPhotoM;
