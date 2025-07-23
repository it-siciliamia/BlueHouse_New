import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import supportImage from "../../images/support/support.png";
import faqImage from "../../images/support/faq.png";
import forumImage from "../../images/support/feedback.png";
import callImage from "../../images/support/call-icon.png";
import whatsappImage from "../../images/support/whatsapp-icon.png";
import { WithTransLate } from "../helpers/translating/index";
import s from "./Support.module.scss";

// ✅ Inline Mobile Detection Logic
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function SupportCard({ description, title, image }) {
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
  const isMobile = useIsMobile(); // ✅ Use the hook directly

  return (
    <div id="SUPPORT" className={s.support}>
      {isMobile ? ( // ✅ Show Mobile Layout
        <div className={s.mobileSupport}>
          <a href="tel:+3547756480" className={s.contactLink}>
            <img src={callImage} alt="Call Us" className={s.icon} />
            <p>Contact</p>
            <p>Click icon to call us</p>
          </a>
          <a href="https://wa.me/+3547756480" className={s.contactLink}>
            <img src={whatsappImage} alt="WhatsApp" className={s.icon} />
            <p>WhatsApp</p>
            <p>Contact via WhatsApp</p>
          </a>
        </div>
      ) : ( // ✅ Default Desktop Layout
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
              description={"Guest Information Portal."}
              title={"FAQ"}
              image={faqImage}
            />
          </a>
          <a
            className={s.description}
            href="https://bluehouseis.zohodesk.eu/portal/en/community/guestforum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SupportCard
              description={"Your opinion is important to us."}
              title={"FORUM"}
              image={forumImage}
            />
          </a>
        </div>
      )}
    </div>
  );
}
