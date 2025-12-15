import PropTypes from "prop-types";

import s from "./HouseRulesComponent.module.scss";
import { WithTransLate } from "../../components/helpers/translating/index.jsx";

function Rule({ Icon, header, text }) {
  return (
    <div className={s.rule}>
      {!!Icon && (
        <div className={s.iconWrapper}>
          <img src={Icon} className={s.iconStyle} alt="" />
        </div>
      )}
      <div className={s.ruleContent}>
        {header && (
          <h3 className={s.ruleHeader}>
            <WithTransLate text={header} />
          </h3>
        )}
        <p className={s.ruleText}>
          <WithTransLate text={text} />
        </p>
      </div>
    </div>
  );
}

Rule.propTypes = {
  Icon: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Rule;
