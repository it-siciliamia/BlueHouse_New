import React from "react";
import PropTypes from "prop-types";
import { WithTransLate } from "../../helpers/translating/index";
import s from "./Button.module.scss";

const Button = ({
  text = "",
  type = "submit",
  btnClass = "btnDark",
  handleClick,
  disabled = false,
  width = "280px",
}) => {
  return (
    <button
      className={s[btnClass]}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      style={{ width: width }}
    >
      <div className={s.textWrapper}>
        <WithTransLate text={text} />
      </div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  btnClass: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  width: PropTypes.string,
};

export default Button;
