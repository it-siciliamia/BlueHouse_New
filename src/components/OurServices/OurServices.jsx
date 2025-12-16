import s from "./OurServices.module.scss";
import clock from "../../images/services/clock.svg";
import house from "../../images/services/house.svg";
import money from "../../images/services/money.svg";
import useBreakpoints from "../../Styles/useBreakpoints.js";
import { WithTransLate } from "../helpers/translating/index.jsx";

// Titles + subtitles exactly as in the design
const servicesData = [
  {
    icon: money,
    title: "CHEAPEST PRICE GUARANTEED",
    subtitle: "If you book through our website",
  },
  {
    icon: clock,
    title: "GREATEST FLEXIBILITY",
    subtitle: "Self check-in and self-service breakfast",
  },
  {
    icon: house,
    title: "3 LOCATIONS",
    subtitle: "On one of the best spots for catching Northern Lights",
  },
];

const OurServices = () => {
  const { isMobile, isDesktop } = useBreakpoints();

  return (
    <div className={s.ourServices}>
      <div className={s.sectionContent}>
        {servicesData.map(({ icon, title, subtitle }, index) => (
          <div
            key={index}
            className={s.serviceCard}
            // Cards are non-interactive: no onClick, no modal
            style={{
              gap: isDesktop ? "14.84px" : isMobile ? "15px" : "14.84px", // unified spacing logic
            }}
          >
            <div className={s.imageContainer}>
              <img src={icon} alt="Service Icon" className={s.icon} />
            </div>

            {/* Text block with title + subtitle */}
            <div className={s.textBlock}>
              <p className={s.cardTitle}>
                <WithTransLate text={title} />
              </p>
              <p className={s.cardSubtitle}>
                <WithTransLate text={subtitle} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
