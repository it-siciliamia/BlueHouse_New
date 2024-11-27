import { WithTransLate } from "../../../translating/index";

import "./ReviewSlide.css";

const ReviewSlide = ({ quote }) => {
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

export default ReviewSlide;
