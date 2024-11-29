import { WithTransLate } from "../../../translating/index";
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

export default Button;
