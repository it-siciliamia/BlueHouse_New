import React from "react";
import PropTypes from "prop-types";
import { WithTransLate } from "../helpers/translating/index";
import "./ReviewCard.scss";

const ReviewCard = ({ quote }) => {
  return (
    <div className="review-card">
      <p className="review-card__quote">
        <WithTransLate text={quote.text} />
      </p>

      <div className="review-card__author">
        <hr className="review-card__hr" />
        <span className="review-card__name">
          <WithTransLate text={quote.customerName} />
        </span>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;
