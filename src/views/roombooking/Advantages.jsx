import { WithTransLate } from "../../components/helpers/translating";
import busSign from "../../images/roombooking/busSign.svg";
import carSign from "../../images/roombooking/carSign.svg";
import coinSign from "../../images/roombooking/dollarsign.svg";
import planeSign from "../../images/roombooking/planeSign.svg";
import spotSign from "../../images/roombooking/spotSign.svg";
import timeSign from "../../images/roombooking/timeSign.svg";
import useBreakpoints from "../../Styles/useBreakpoints.js";

const Advantages = () => {
  const { isMobile } = useBreakpoints();
  return (
    <section className="bh_advantages-wrapper">
      <div className="bh_advantages-container">
        <ul className="bh_advantages-list">
          <li className="bh_advantages-item">
            <img src={coinSign} alt="dollar icon" className="bh_advantages-icons" />
            <p className="bh_advantages-text">
              <WithTransLate text="Best Price Guarantee" />
            </p>
          </li>
          <li className="bh_advantages-item">
            <img src={spotSign} alt="dollar icon" className="bh_advantages-icons" />
            <p className="bh_advantages-text">
              <WithTransLate text="Popular for Northern Lights" />
            </p>
          </li>
          <li className="bh_advantages-item">
            <img src={busSign} alt="dollar icon" className="bh_advantages-icons" />
            <p className="bh_advantages-text">
              <WithTransLate text="3 min walk to bus stop" />
            </p>
          </li>
          <li className="bh_advantages-item">
            <img src={carSign} alt="dollar icon" className="bh_advantages-icons" />
            <p className="bh_advantages-text">
              <WithTransLate text="5 min drive from town" />
            </p>
          </li>
          <li className="bh_advantages-item">
            <img src={planeSign} alt="dollar icon" className="bh_advantages-icons" />
            <p className="bh_advantages-text">
              <WithTransLate text="45 min drive from airport" />
            </p>
          </li>
          <li className="bh_advantages-item">
            <img src={timeSign} alt="dollar icon" className="bh_advantages-icons" />
            <p className="bh_advantages-text">
              <WithTransLate text="Late night self check-in" />
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
