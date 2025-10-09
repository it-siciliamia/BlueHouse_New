import React from "react";
import PropTypes from "prop-types";
import supportIcon from "../../images/support/support.svg";
import faqIcon from "../../images/support/faq.svg";
import forumIcon from "../../images/support/forum.svg";
import whatsapp from "../../images/support/whatsapp_new.svg";
import { WithTransLate } from "../helpers/translating/index";
import s from "./Support.module.scss";

function SupportCard({ description, title, icon }) {
  return (
    <div className={s.supportCard}>
      <img alt="icon" className={s.icon} src={icon} />
      <p className={s.cardTitle}>
        <WithTransLate text={title} />
      </p>
      <p className={s.cardText}>
        <WithTransLate text={description} />
      </p>
    </div>
  );
}

SupportCard.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default function Support() {
  return (
    <div id="SUPPORT" className={s.support}>
      <div className={s.sectionContent}>
        {/* SUPPORT link updated */}
        <a
          className={s.description}
          href="https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SupportCard
            description={"Send us your questions"}
            title={"SUPPORT"}
            icon={supportIcon}
          />
        </a>
        {/* FAQ link updated */}
        <a
          className={s.description}
          href="https://bluehouseis.zohodesk.eu/portal/en/kb/iceland"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SupportCard
            description={"Find the answers you need"}
            title={"FAQ"}
            icon={faqIcon}
          />
        </a>
        <a
          className={s.description}
          href="https://wa.me/3547756480"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SupportCard
            description={"Send us a message"}
            title={"WHATSAPP"}
            icon={whatsapp}
            phoneNumber="+354 775 6480"
          />
        </a>
        <a
          className={s.description}
          href="https://bluehouseis.zohodesk.eu/portal/en/community/guestforum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SupportCard
            description={"Your opinion is important to us"}
            title={"FEEDBACK"}
            icon={forumIcon}
          />
        </a>
      </div>
    </div>
  );
}
