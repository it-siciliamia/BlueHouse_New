import s from "./SaveUpTo10.module.scss";
import stampLogo from "../../images/stampLogo.png";
import Button from "../Shared/ui/Button.jsx";

const BOOKING_URL =
  "https://beds24.com/booking2.php?propid=3578&layout=1&_gl=1*1u8i1zn*_ga*MTEwNjkxMDcyMS4xNzU2MTQ4MDgy*_ga_6QGX4YP9SF*czE3NTg2NjU2NDkkbzM4JGcxJHQxNzU4NjY3NDkzJGo1NCRsMCRoMA..";

const items = [
  "Reservation prices that are 5% to 10% lower compared to other booking sites.",
  "More flexible reservation conditions, offering you more advantages than bookings made through third-party platforms.",
  "Free continental breakfast that includes our home-baked bread to start your day!",
];

export default function SaveUpTo10() {
  const handleBookNow = () => {
    window.location.assign(BOOKING_URL);
  };

  return (
    <section id="SAVEUPTO10" className={s.section}>
      <div className={s.wrapper}>
        <div className={s.container}>
          {/* Heading */}
          <div className={s.headingRow}>
            <div className={s.titleBlock}>
              <h2 className={s.title}>SAVE UP TO 10% ON YOUR STAY</h2>
              <p className={s.subtitle}>What you get if you book you directly on our website</p>
            </div>

            <img
              className={s.stampImg}
              src={stampLogo}
              alt="Blue House Price Promise"
              width={100}
              height={100}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Top rule below subtitle */}
          <div className={s.topRule} />

          {/* List */}
          <div className={s.textWrapper}>
            <div className={s.list}>
              {items.map((text, idx) => (
                <div className={s.listItem} key={idx}>
                  <span className={s.num}>{idx + 1}.</span>
                  <p className={s.desc}>{text}</p>
                </div>
              ))}
            </div>

            <div className={s.buttonRow}>
              <Button className={s.btnOverride} onClick={handleBookNow}>
                BOOK NOW AND SAVE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
