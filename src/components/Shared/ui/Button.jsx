import PropTypes from "prop-types";

import s from "./LinkButton.module.scss";

function Button({
  variant = "primary",
  disabled = false,
  className = "",
  onClick,
  children,
  ...props
}) {
  const classes = [s.btn, s[`btn--${variant}`], disabled ? s["is-disabled"] : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
