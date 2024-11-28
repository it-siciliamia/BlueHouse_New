import "./css/ReviewCard.css";
import { Paper } from "@material-ui/core";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { WithTransLate } from "./translating/index";
function ReviewCard({ name, review }) {
  return (
    <div className="reviewCard">
      <Paper className="reviewCardPaper">
        <div className="reviewCard_top">
          <FormatQuoteIcon className="reviewCard_quotes" />
        </div>
        <div className="reviewCard_center">
          <div className="reviewCard_centertext">
            <h2>
              <WithTransLate text={review} />
            </h2>
          </div>
        </div>
        <div className="reviewCard_bottom">
          <h2>
            __
            <WithTransLate text={name} />
          </h2>
          <FormatQuoteIcon className="reviewCard_quotes" />
        </div>
      </Paper>
    </div>
  );
}

export default ReviewCard;
