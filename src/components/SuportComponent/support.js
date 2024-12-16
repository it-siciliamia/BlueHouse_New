import React from "react";
import PropTypes from "prop-types";
import supportImage from "../../images/support/support.png";
import faqImage from "../../images/support/faq.png";
import forumImage from "../../images/support/forum.png";
// import feedbackImage from "../../images/support/feedback.png";
import { WithTransLate } from "../helpers/translating/index";
import s from "./Support.module.scss";

function SupportCard({ description, title, image }) {
  return (
    <div className={s.supportCard}>
      <img alt="icon" className={s.icon} src={image} />
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
  image: PropTypes.string.isRequired,
};

export default function Support() {
  return (
    <div id="SUPPORT" className={s.support}>
      <div className={s.sectionContent}>
        <a
          className={s.description}
          href="https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SupportCard
            description={"Get personal support from our team."}
            title={"SUPPORT"}
            image={supportImage}
          />
        </a>
        <a
          className={s.description}
          href="https://bluehouseis.zohodesk.eu/portal/en/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SupportCard
            description={"Check previous guest requests."}
            title={"FAQ"}
            image={faqImage}
          />
        </a>
        {/* <a
        className={s.description}
        href="https://gnl.ladesk.com/219394-Feedback"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SupportCard
          description={"Your opinion is important to us."}
          title={"FEEDBACK"}
          image={feedbackImage}
        />
      </a> */}
        <a
          className={s.description}
          href="https://bluehouseis.zohodesk.eu/portal/en/community/guestforum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SupportCard
            description={"Connect, Explore, and Share Your Journey!"}
            title={"FORUM"}
            image={forumImage}
          />
        </a>
      </div>
    </div>
  );
}
