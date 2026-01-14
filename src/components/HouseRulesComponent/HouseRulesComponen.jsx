import Guidelines from "./Guidelines.jsx";
import s from "./HouseRulesComponent.module.scss";
import { WithTransLate } from "../../components/helpers/translating/index.jsx";
import useBreakpoints from "../../Styles/useBreakpointsNew.js";
import BookingBtnWrapper from "../BookingBtnWrapper/BookingBtnWrapper.jsx";

function HouseRulesComponents() {
  const { isDesktop } = useBreakpoints();

  return (
    <section className={s.houseRules}>
      <div className={s.houseRulesContent}>
        <BookingBtnWrapper />
        <div className={isDesktop ? s.titleWrapper : s.titleWrapperMobile}>
          <div className={s.heroImage}></div>
          <h1 className={s.title}>
            <WithTransLate text="House rules" />
          </h1>
        </div>
        <Guidelines />
      </div>
    </section>
  );
}

export default HouseRulesComponents;
