import React from "react";
import PropTypes from "prop-types";
import { WithTransLate } from "../helpers/translating/index";
import tripadvisor from "../../images/tipadvisor.png";
import google from "../../images/google.png";
import s from "./ReviewRoomBooking.module.scss";

const CircleRating = ({ rating, text, reviews }) => {
  const circles = Array.from({ length: 5 }, (_, index) => {
    const diff = rating - index;
    if (diff >= 1) return "full";
    if (diff > 0) return "partial";
    return "empty";
  });

  return (
    <div className={s.circleRating}>
      <h3 className={s.titleText}>Blue House B&B</h3>
      <div className={s.progressPart}>
        <div className={s.circles}>
          {circles.map((type, index) => (
            <span key={index} className={`${s.circle} ${s[type]}`}></span>
          ))}
        </div>
        <p style={{ marginTop: "-5px", fontSize: "20px" }}>
          {rating.toFixed(1)}
        </p>
      </div>
      <div className={s.details}>
        <p>{reviews} reviews</p>
      </div>
      <div className={s.logoPart}>
        <img src={tripadvisor} alt="Tripadvisor" className={s.logo} />
      </div>
    </div>
  );
};

const StarRating = ({ rating, text, reviews }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const diff = rating - index;
    if (diff >= 1) return "full";
    if (diff > 0) return "partial";
    return "empty";
  });

  return (
    <div className={s.starRating}>
      <h3 className={s.titleText}>Blue House B&B</h3>
      <div className={s.progressPart}>
        <div className={s.stars}>
          {stars.map((type, index) => (
            <span key={index} className={`${s.star} ${s[type]}`}></span>
          ))}
        </div>
        <p style={{ marginTop: "-5px", fontSize: "20px" }}>
          {rating.toFixed(1)}
        </p>
      </div>
      <div className={s.details}>
        <p>{reviews} reviews</p>
      </div>
      <div className={s.logoPart}>
        <img src={google} alt="Google" className={s.logo} />
      </div>
    </div>
  );
};

const ReviewRoomBooking = ({ tripadvisor, googleRatings }) => {
  const totalReviews = googleRatings.reduce(
    (sum, { reviews }) => sum + reviews,
    0
  );
  const totalRating = googleRatings.reduce(
    (sum, { rating, reviews }) => sum + rating * reviews,
    0
  );
  const googleAverageRating = totalReviews ? totalRating / totalReviews : 0;

  return (
    <section className={s.ratings}>
      <div className={s.sectionWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>
            <WithTransLate text="REVIEW" />
          </h2>
        </div>

        <div className={s.contentPart}>
          <div>
            <CircleRating
              rating={tripadvisor.rating}
              text={tripadvisor.text}
              reviews={tripadvisor.reviews}
            />
          </div>

          <div>
            <StarRating
              rating={googleAverageRating}
              text={googleRatings[0].text}
              reviews={totalReviews}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ReviewRoomBooking.propTypes = {
  tripadvisor: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
  googleRatings: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      reviews: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ReviewRoomBooking;
