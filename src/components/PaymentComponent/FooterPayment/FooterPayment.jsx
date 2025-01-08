import React from "react";
import { useHistory } from "react-router-dom";
import { WithTransLate } from "../../helpers/translating";
import Facebook from "../../../images/Header_icons/headerSocialIcons/facebook.svg";
import instaIcon from "../../../images/Header_icons/headerSocialIcons/insta.svg";
import Email from "../../../images/Header_icons/headerSocialIcons/email.svg";
import Whatsapp from "../../../images/Header_icons/headerSocialIcons/whats.svg";
import s from "./FooterPayment.module.scss";

const FooterPayment = () => {
  const history = useHistory();
  return (
    <div className={s.footer}>
      <div className={s.footerCopyright}>
        <p className={s.сopyrightText}>
          <WithTransLate text="© 2022 Blue House B&B" />
        </p>
        <button
          className={s.btn}
          onClick={() => history.push("/privacy-and-policy")}
        >
          <WithTransLate text="Privacy Policy" />
        </button>
      </div>
      <div className={s.footerSocial}>
        <a
          href="https://www.instagram.com/bluehousebb/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={instaIcon}
            title="Instagram"
            alt="instagram"
            style={{ width: "23px", height: "23px" }}
          />
        </a>
        <a
          href="https://www.facebook.com/bluehouseiceland"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Facebook}
            title="facebook"
            alt="facebook"
            style={{ width: "23px", height: "23px" }}
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Whatsapp}
            title="Whatsapp"
            alt="whatsapp"
            style={{ width: "23px", height: "23px" }}
          />
        </a>
        <a
          href="https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Email}
            title="Email"
            alt="Email"
            style={{ width: "23px", height: "23px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default FooterPayment;
