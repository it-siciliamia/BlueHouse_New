import PropTypes from "prop-types";

import s from "./HouseRulesComponent.module.scss";
import { WithTransLate } from "../../components/helpers/translating/index.jsx";

function Rule({ Icon, header, text }) {
  return (
    <div className={s.rule}>
      {!!Icon && <img src={Icon} className={s.iconStyle} alt="Rule" />}
      <div className={s.ruleText}>
        <div className={s.ruleContent}>
        {header && (
          <h3 className={s.ruleHeader}>
           <WithTransLate text={header} />
           </h3>
        )}
        {/* section to insert headers in the Guidelines.jsx */}
    </div>
        <WithTransLate text={text} />
      </div>
    </div>
  );
}

Rule.propTypes = {
  Icon: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Rule;
