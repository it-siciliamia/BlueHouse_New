import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { WithTransLate } from "../helpers/translating/index";
import "swiper/swiper.css";
import ReviewCard from "./ReviewSlide/ReviewSlide";
import "./ReviewSlider.css";

const QUOTES = [
  {
    id: 1,
    customerName: "LESLEY",
    text: "The location offered an amazing view of the sea.",
  },
  {
    id: 2,
    customerName: "JAMES",
    text: "The Blue House B&B was everything our family of 7 hoped for!",
  },
  {
    id: 3,
    customerName: "PRATEEK",
    text: "Great place to stay. The look and feel of the place was quite cozy.",
  },
  {
    id: 4,
    customerName: "PAULS",
    text: "One of the best features: freshly home-baked bread for breakfast.",
  },
  {
    id: 5,
    customerName: "JODY",
    text: "Superb location and an exciting atmosphere around the area!",
  },
];

const DESCTOP_BREAKPOINT = 600;

const ReviewSlider = () => {
  const windowInnerWidth = window.innerWidth;

  const slidesPerView = windowInnerWidth > DESCTOP_BREAKPOINT ? 2 : 1;

  return (
    <section className="review">
      <div className="review__section">
        <h3 className="review__title">
          <WithTransLate text="REVIEWS" />
        </h3>

        <Swiper
          loop
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={false}
          navigation={{
            prevEl: ".button-prev",
            nextEl: ".button-next",
          }}
          slidesPerView={slidesPerView}
          className="custom-slider"
        >
          {QUOTES.map((quote) => (
            <SwiperSlide key={quote.id} className="custom-slide">
              <ReviewCard key={quote.id} quote={quote} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="review__buttons">
        <button
          className="review__button button-prev"
          title="Previous review"
        />

        <button className="review__button button-next" title="Next review" />
      </div>
    </section>
  );
};

export default ReviewSlider;
