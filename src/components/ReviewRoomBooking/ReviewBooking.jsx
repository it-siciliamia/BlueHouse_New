import PropTypes from "prop-types";

import s from "./ReviewBooking.module.scss";
import tripadvisorLogo from "../../images/findMore/tripadvisor_logo.svg";
import googleLogo from "../../images/google_logo.svg";
import { WithTransLate } from "../helpers/translating";

const vendors = [
  {
    id: "tripadvisor",
    label: "Tripadvidsor",
    rating: 4.5,
    reviews: 470,
    logo: tripadvisorLogo,
    classLogo: s.logoLg,
    ratingSyle: "dot",
    url: "https://www.tripadvisor.dk/Hotel_Review-g189970-d1915669-Reviews-Blue_House_B_B-Reykjavik_Capital_Region.html",
  },
  {
    id: "google",
    label: "Google",
    rating: 4.3,
    reviews: 265,
    logo: googleLogo,
    classLogo: s.logoSm,
    ratingSyle: "star",
    url: "",
  },
];

function Review({ vendor }) {
  const ratingScore = Array.from({ length: 5 }, (_, index) => {
    const diff = vendor.rating - index;
    if (diff >= 1) return "full";
    if (diff > 0) return "partial";
    return "empty";
  });

  const containerClass = vendor.ratingSyle === "dot" ? s.circles : s.stars;
  const itemClass = vendor.ratingSyle === "dot" ? s.circle : s.star;

  const StarIcon = ({ type }) => {
    const fill = type === "full" ? "#F3C142" : type === "partial" ? "url(#halfStar)" : "#D9D9D9";

    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill={fill}
        />
      </svg>
    );
  };

  StarIcon.propTypes = {
    type: PropTypes.oneOf(["full", "partial", "empty"]).isRequired,
  };

  return (
    <div className={s.reviewWrapper}>
      <h4 className={s.reviewTitle}>Blue House B&B</h4>
      <div>
        {vendor.ratingSyle === "star" ? (
          <div className={s.stars}>
            {ratingScore.map((type, index) => (
              <StarIcon key={index} type={type} />
            ))}
          </div>
        ) : (
          <div className={containerClass}>
            {ratingScore.map((type, index) => (
              <span key={index} className={`${itemClass} ${s[type]}`}></span>
            ))}
          </div>
        )}
        <div className={s.ratingSummary}>
          <span>{vendor.rating}/5</span>
          <a href={vendor.url} aria-label="Read reviews">
            +{vendor.reviews} reviews
          </a>
        </div>
      </div>

      <div className={s.logoWrapper}>
        <img src={vendor.logo} className={vendor.classLogo} alt={vendor.label} />
      </div>
    </div>
  );
}

Review.propTypes = {
  vendor: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    classLogo: PropTypes.string.isRequired,
    ratingSyle: PropTypes.oneOf(["dot", "star"]).isRequired,
    url: PropTypes.string,
  }).isRequired,
};

function ReviewBooking() {
  return (
    <section id="REVIEWS" className={s.section}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="halfStar">
            <stop offset="50%" stopColor="#F3C142" />
            <stop offset="50%" stopColor="#D9D9D9" />
          </linearGradient>
        </defs>
      </svg>

      <h3>
        <WithTransLate text="Reviews" />
      </h3>

      <div className={s.sectionWrapper}>
        {vendors.map((vendor) => (
          <Review key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  );
}

export default ReviewBooking;
