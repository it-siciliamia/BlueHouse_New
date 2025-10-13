import React from "react";
import PropTypes from "prop-types";
import { WithTransLate } from "../../helpers/translating/index";

import s from "./Button.module.scss";

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
      <div
        className={s.textWrapper}
        style={{ textTransform: icon ? "capitalize" : "uppercase" }}
      >
        {icon && (
          <span className={s.iconWrapper}>
            {React.cloneElement(icon, { size: size })}
          </span>
        )}
        <WithTransLate text={text} />
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
};

export default Button;
