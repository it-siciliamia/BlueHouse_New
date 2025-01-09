import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { WithTransLate } from "../../helpers/translating/index";
import s from "./TextField.module.scss";

const TextField = forwardRef(
  (
    {
      type = "text",
      name = "",
      value = "",
      handleChange = () => {},
      placeholder = "",
      required = false,
      title = "",
      className = "",
      error = null,
      autoComplete = "off",
    },
    ref
  ) => {
    const labelClass = className ? `${s.label} ${s[className]}` : s.label;
    const inputClass = className ? `${s.input} ${s[className]}` : s.input;
    const emptyInputClass = "hasValue";

    console.log(error);

    return (
      <label className={labelClass}>
        <input
          ref={ref}
          className={value ? `${s.input} ${s[emptyInputClass]}` : inputClass}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          title={title}
          autoComplete={autoComplete}
        />
        {value ? (
          <span className={s.placeholderTop}>
            <WithTransLate text={placeholder} />
          </span>
        ) : (
          <span className={s.placeholderBottom}>
            <WithTransLate text={placeholder} />
          </span>
        )}
        {error && (
          <p className={s.error}>
            <WithTransLate text={title || "Error occurred"} />
          </p>
        )}
      </label>
    );
  }
);

TextField.displayName = "TextField";

TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.object,
  autoComplete: PropTypes.string,
};

export default TextField;
