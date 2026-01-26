// In HouseRulesComponen.jsx
import Guidelines from "./Guidelines.jsx";
import s from "./HouseRulesComponent.module.scss";
import { WithTransLate } from "../../components/helpers/translating/index.jsx";
import useBreakpoints from "../../Styles/useBreakpointsNew.js";
import BookingBtnWrapper from "../BookingBtnWrapper/BookingBtnWrapper.jsx";

function HouseRulesComponents() {
  const { isDesktop, isMobile, isTablet } = useBreakpoints();
  const isTabletLayout = !isMobile && !isDesktop;

  return (
    <section className={s.houseRules}>
      <div className={s.houseRulesContent}>
        {(isMobile || isTablet) && <BookingBtnWrapper />}
        <div className={isMobile ? s.titleWrapperMobile : s.titleWrapper}>
          <h1 className={s.title}>
            <WithTransLate text="House rules" />
          </h1>
          <div className={s.heroImage}></div>
        </div>
        {isTabletLayout && (
          <h2 className={s.tabletTitle}>
            <WithTransLate text="House rules" />
          </h2>
        )}
        {isDesktop && (
          <h2 className={s.sectionTitle}>
            <WithTransLate text="House rules" />
          </h2>
        )}
        <Guidelines />
      </div>
    </section>
  );
}

export default HouseRulesComponents;
