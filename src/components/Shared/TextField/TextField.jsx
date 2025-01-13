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
      formatCardNumber = false,
      formatExpiryDate = false,
    },
    ref
  ) => {
    const labelClass = className ? `${s.label} ${s[className]}` : s.label;
    const inputClass = className ? `${s.input} ${s[className]}` : s.input;
    const emptyInputClass = "hasValue";

    const formatValue = (val) => {
      if (formatCardNumber) {
        return (
          val
            .replace(/\D/g, "")
            .match(/.{1,4}/g)
            ?.join(" ")
            .slice(0, 19) || ""
        );
      }

      if (formatExpiryDate) {
        return val
          .replace(/\D/g, "")
          .replace(/^(\d{2})(\d{1,2})?/, (_, m1, m2) =>
            m2 ? `${m1}/${m2}` : m1
          )
          .slice(0, 5);
      }

      return val;
    };

    const handleInputChange = (e) => {
      const formattedValue = formatValue(e.target.value);
      handleChange(formattedValue);
    };

    return (
      <label className={labelClass}>
        <input
          ref={ref}
          className={value ? `${s.input} ${s[emptyInputClass]}` : inputClass}
          type={type}
          name={name}
          value={formatValue(value)}
          onChange={handleInputChange}
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
            <WithTransLate text={error.message || "Error occurred"} />
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
  formatCardNumber: PropTypes.bool,
  formatExpiryDate: PropTypes.bool,
};

export default TextField;
