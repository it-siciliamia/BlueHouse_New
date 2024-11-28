import { WithTransLate } from "../../../translating/index";
import s from "./Button.module.scss";

const Button = ({
  text = "",
  type = "submit",
  btnClass = "btnDark",
  handleClick,
  disabled = false,
}) => {
  return (
    <button
      className={s[btnClass]}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      <div className={s.textWrapper}>
        <WithTransLate text={text} />
      </div>
    </button>
  );
};

export default Button;
