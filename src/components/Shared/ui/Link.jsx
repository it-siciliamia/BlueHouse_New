import PropTypes from "prop-types";
import s from "./LinkButton.module.scss";

function Link({
  variant = "primary",
  href,
  target,
  rel,
  className = "",
  disabled = false,
  children,
  ...props
}) {
  const classes = [
    s.btn,
    s[`btn--${variant}`],
    disabled ? s["is-disabled"] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const finalRel =
    target === "_blank"
      ? [rel, "noopener", "noreferrer"].filter(Boolean).join(" ")
      : rel;

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <a
      className={classes}
      href={disabled ? undefined : href}
      target={target}
      rel={finalRel}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Link;
