import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.css";
// import "swiper/css/navigation";

import "./homeSlider.css"

// import required modules
import { Navigation, Autoplay } from "swiper";

// assets
import slide1 from "../../images/homePageSlider/slide1.jpg";
import slide2 from "../../images/homePageSlider/slide2.jpg";
import slide3 from "../../images/homePageSlider/slide3.jpg";
import slide4 from "../../images/homePageSlider/slide4.jpg";
import slide5 from "../../images/homePageSlider/slide5.jpg";
import slide6 from "../../images/homePageSlider/slide6.jpg";


const sliderData = [
  {
    img: slide1,
    title: "Image",
    author: "author",
  },
  {
    img: slide2,
    title: "Image",
    author: "author",
  },
  {
    img: slide3,
    title: "Image",
    author: "author",
  },
  {
    img: slide4,
    title: "Image",
    author: "author",
  },
  {
    img: slide5,
    title: "Image",
    author: "author",
  },
  {
    img: slide6,
    title: "Image",
    author: "author",
  },
];


export default function TabletHomeSlider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Navigation]}
        className="bannerSwiper"
      >
        {sliderData.map((tile, index) => (
          <SwiperSlide key={index}>
            <img src={tile.img} alt={tile.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
