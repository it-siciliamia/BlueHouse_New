import PropTypes from "prop-types";
import React from "react";

import s from "./Button.module.scss";
import { WithTransLate } from "../../helpers/translating/index.jsx";

/**
 * @deprecated This Button component is deprecated.
 * Please use the Button component from Shared/ui/Button instead.
 */
const Button = ({
  text = "",
  icon = null,
  type = "submit",
  btnClass = "btnDark",
  handleClick,
  disabled = false,
  width = "280px",
  size = "24px",
}) => {
  return (
    <button
      className={s[btnClass]}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      style={{ width: width }}
    >
      <div className={s.textWrapper} style={{ textTransform: icon ? "capitalize" : "uppercase" }}>
        <WithTransLate text={text} />
        {!!icon && <span className={s.iconWrapper}>{React.cloneElement(icon, { size })}</span>}
      </div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.string,
  btnClass: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Button;
