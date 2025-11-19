import CookiePolicy from "./CookiePolicy.jsx";
import Privacy from "./Privacy.jsx";
import s from "./PrivacyComponent.module.scss";
import { WithTransLate } from "../helpers/translating/index.jsx";

function PrivacyPolicyComponent() {
  return (
    <section className={s.privacy}>
      <div className={s.privacyContent}>
        <div className={s.titleWrapper}>
          <h2 className={s.titleFirst}>
            <WithTransLate text="IMPRINT AND PRIVACY POLICY" />
          </h2>
        </div>
        <div className={s.contentPart}>
          <div className={s.imagePrivacy}></div>
          <Privacy />
        </div>
      </div>

      <div className={s.privacyContent}>
        <div className={s.titleWrapper}>
          <h2 className={s.titleSecond}>
            <WithTransLate text="COOKIE POLICY" />
          </h2>
        </div>
        <div className={s.contentPart}>
          <div className={s.imageCookie}></div>
          <CookiePolicy />
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicyComponent;
