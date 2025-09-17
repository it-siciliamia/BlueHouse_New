import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { WithTransLate } from "../helpers/translating/index";
import { HiOutlineChevronDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronUp } from "react-icons/hi";

import ReviewCard from "./ReviewCard";

import tripAdvisor from "../../images/findMore/TripadvisorLogo.png";

import s from "./ReviewSection.module.scss";
// import "swiper/swiper.css";

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

// Chevron Button
function ChevronButton({ id, direction, width = 35, height = 35, color = "var(--color-neutral-500)", iconSize = 24, className = "" }) {
  return (
    <button id={id} style={{ width, height, color }} className={`${s[className]} ${s.chevronButton}`}>
      {direction === 'left' && <HiOutlineChevronLeft size={iconSize}/>}
      {direction === 'right' && <HiOutlineChevronRight size={iconSize}/>}
      {direction === 'up' && <HiOutlineChevronUp size={iconSize}/>}
      {direction === 'down' && <HiOutlineChevronDown size={iconSize}/>}
    </button>
  );
}

// CTA Button
function Button({ children }) {
  return (
    <button className={s.btn}>
      <span>{children}</span>
    </button>
  );
}

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
      <Button>
        <WithTransLate text="read more reviews" />
      </Button>
    </div>
  );
}

function ReviewSection() {
  return (
    <section className={s.section}>
      <h3>
        <WithTransLate text="Reviews" />
      </h3>
      <div className={s.sectionWrapper}>
        <ReviewSponsor sponsorImage={tripAdvisor} />

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
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 'auto',
              spaceBetween: 60,
            },
        }}
        >
          {quotes.map((quote, i) => (
            <SwiperSlide key={i} className={s.swiperSlide}>
              <ReviewCard quote={quote} />
            </SwiperSlide>
          ))}

        </Swiper>

          <div className={s.sliderNavigation}>
            <ChevronButton id="swiper-prev" className="alignChevronLeft" direction={'left'} size={24}/>

            <ChevronButton id="swiper-next" className="alignChevronRight" direction={'right'} size={24}/>
          </div>

      </div>
    </section>
  );
}

export default ReviewSection;
