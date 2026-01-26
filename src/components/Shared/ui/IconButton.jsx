import PropTypes from "prop-types";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronUp,
  HiOutlineChevronDown,
  HiOutlineArrowUp,
  HiOutlineArrowDown,
} from "react-icons/hi";

import s from "./IconButton.module.scss";

const icons = {
  //Chevrons
  chevronLeft: HiOutlineChevronLeft,
  chevronRight: HiOutlineChevronRight,
  chevronUp: HiOutlineChevronUp,
  chevronDown: HiOutlineChevronDown,

  //Arrows
  arrowUp: HiOutlineArrowUp,
  arrowDown: HiOutlineArrowDown,
};

function IconButton({
  id,
  icon,
  variant = "neutral",
  size = "md",
  iconSize = 24,
  disabled = false,
  onClick,
  className = "",
  ...props
}) {
  const Icon = icons[icon];
  const classes = [s.iconButton, s[`iconButton--${variant}`], s[`iconButton--${size}`], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      id={id}
      type="button"
      className={classes}
      disabled={disabled}
      {...(onClick ? { onClick } : {})}
      {...props}
    >
      <Icon size={iconSize} aria-hidden="true" />
    </button>
  );
}

IconButton.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.oneOf([
    "chevronLeft",
    "chevronRight",
    "chevronUp",
    "chevronDown",
    "arrowUp",
    "arrowDown",
  ]).isRequired,
  variant: PropTypes.oneOf(["neutral", "primary", "inverse"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  iconSize: PropTypes.number,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default IconButton;
