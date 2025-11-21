import PropTypes from "prop-types";

import s from "./HouseRulesComponent.module.scss";
import { WithTransLate } from "../../components/helpers/translating/index.jsx";

function Rule({ Icon, text }) {
  return (
    <div className={s.rule}>
      {!!Icon && <img src={Icon} className={s.iconStyle} alt="Rule" />}
      <p className={s.ruleText}>
        <WithTransLate text={text} />
      </p>
    </div>
  );
}

Rule.propTypes = {
  Icon: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Rule;
