import supportImage from "../../images/support/support.png";
import faqImage from "../../images/support/faq.png";
import forumImage from "../../images/support/forum.png";
// import feedbackImage from "../../images/support/feedback.png";
import { WithTransLate } from "../../translating/index";
import { Link } from "react-router-dom";
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

export default function Support() {
  return (
    <div
      id="FAQ"
      className={s.support}
      // style={{ display: !isDesktop ? "none" : "flex" }}
    >
      <Link
        className={s.description}
        to={{
          pathname:
            "https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460",
        }}
        target="_blank"
      >
        <SupportCard
          description={"Get personal support from our team."}
          title={"SUPPORT"}
          image={supportImage}
        />
      </Link>
      <Link
        className={s.description}
        to={{
          pathname: "https://bluehouseis.zohodesk.eu/portal/en/home",
        }}
        target="_blank"
      >
        <SupportCard
          description={"Check previous guest requests."}
          title={"FAQ"}
          image={faqImage}
        />
      </Link>
      {/* <Link
        className={LinksColor}
        to={{ pathname: "https://gnl.ladesk.com/219394-Feedback" }}
        target="_blank"
      >
        <SupportCard
          description={"Your opinion is important to us."}
          title={"FEEDBACK"}
          image={feedbackImage}
        />
      </Link> */}
      <Link
        className={s.description}
        to={{
          pathname:
            "https://bluehouseis.zohodesk.eu/portal/en/community/guestforum",
        }}
        target="_blank"
      >
        <SupportCard
          description={"Connect, Explore, and Share Your Journey!"}
          title={"FORUM"}
          image={forumImage}
        />
      </Link>
    </div>
  );
}
