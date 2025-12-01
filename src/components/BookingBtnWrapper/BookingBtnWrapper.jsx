import s from "./BookingBtnWrapper.module.scss";
import { WithTransLate } from "../helpers/translating";
import LinkButton from "../Shared/ui/Link.jsx";

function BookingBtnWrapper() {
  return (
    <div className={s.btnContainer}>
      <LinkButton
        variant="primary"
        href="https://beds24.com/booking2.php?propid=3578&layout=1&_gl=1*1m5j7wv*_ga*MTkzNDM4MTM5NS4xNzMxNjYzNTQ2*_ga_6QGX4YP9SF*czE3NTUwMzA0NDAkbzExMCRnMSR0MTc1NTAzMjQ5MCRqNTIkbDAkaDA"
        rel="noreferrer"
        className={s.btnCorrection}
      >
        <WithTransLate text="book your room" />
      </LinkButton>

      <LinkButton
        variant="secondary"
        href="https://bluehouse.tourdesk.is/Tour"
        rel="noreferrer"
        className={s.btnCorrection}
      >
        <WithTransLate text="book day tours" />
      </LinkButton>
    </div>
  );
}

export default BookingBtnWrapper;
