import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { WithTransLate } from "../helpers/translating/index.jsx";

import ReviewCard from "./ReviewCard.jsx";
import Link from "../Shared/ui/Link.jsx";
import IconButton from "../Shared/ui/IconButton.jsx";

import tripAdvisor from "../../images/findMore/TripadvisorLogo.png";

import s from "./ReviewSection.module.scss";

const quotes = [
  {
    customerName: "LESLEY",
    text: "The location offered an amazing view of the sea.",
  },
  {
    customerName: "JAMES",
    text: "The Blue House B&B was everything our family of 7 hoped for!",
  },
  {
    customerName: "PRATEEK",
    text: "Great place to stay. The look and feel of the place was quite cozy.",
  },
  {
    customerName: "PAULS",
    text: "One of the best features: freshly home-baked bread for breakfast.",
  },
  {
    customerName: "JODY",
    text: "Superb location and an exciting atmosphere around the area!",
  },
];

// Tripadvisor
function ReviewSponsor({ sponsorImage }) {
  return (
    <div className={s.reviewSponsor}>
      <div className={s.sponsorContent}>
        <p>
          <WithTransLate text="#2 of 71 houses in Reykjavik" />
          <span>
            <WithTransLate text="on" />
          </span>
        </p>
        <img src={sponsorImage} alt="sponsor-logo" />
      </div>
      <Link href="https://www.tripadvisor.com/Hotel_Review-g189970-d1915669-Reviews-Blue_House_B_B-Reykjavik_Capital_Region.html" target="_blank">
        <WithTransLate text="read more reviews" />
      </Link>
    </div>
  );
}

function ReviewSection() {
  return (
    <section id="REVIEWS" className={s.section}>
      <h3>
        <WithTransLate text="Reviews" />
      </h3>
      <div className={s.sectionWrapper}>
        <ReviewSponsor sponsorImage={tripAdvisor} />

        <div className={s.sliderContainer}>
          <Swiper
            className={s.slider}
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: "#swiper-prev",
              nextEl: "#swiper-next",
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 0 },
              768: { slidesPerView: 1, spaceBetween: 0 },
              1280: { slidesPerView: "auto", spaceBetween: 60 },
            }}
          >
            {quotes.map((quote, i) => (
              <SwiperSlide key={i} className={s.swiperSlide}>
                <ReviewCard quote={quote} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={s.sliderNavigation}>
            <IconButton id="swiper-prev" icon="chevronLeft" />
            <IconButton id="swiper-next" icon="chevronRight" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
