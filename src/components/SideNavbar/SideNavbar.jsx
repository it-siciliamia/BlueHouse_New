import React, { useCallback, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import TranslateMe, { WithTransLate } from "../helpers/translating";
import styles from "./SideNavbar.module.scss";

import Logo from "../../images/Bluehouse.svg";
import Bus from "../../images/shuttle.svg";
import Escape from "../../images/escape.svg";
import Aboutus from "../../images/aboutus.svg";
import Door from "../../images/door.svg";
import Tour from "../../images/tour.svg";
import Accommodation from "../../images/gallery.svg";
import Car from "../../images/car.svg";
import Bag from "../../images/bag.svg";
import Info from "../../images/info.svg";
import LocationIcon from "../../images/location.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import Whatsapp from "../../images/whatsApp.svg";
import Email from "../../images/email.svg";
import supportImage from "../../images/support/whiteBackground_support.svg";
import forumImage from "../../images/support/whiteBackground_forum.svg";
import feedbackImage from "../../images/support/whiteBackground_feedback.svg";

const SCROLL_OPTIONS = Object.freeze({
  duration: 200,
  delay: 0,
  smooth: "easeInOutQuart",
  offset: -70,
});

const NAV_SECTIONS = Object.freeze([
  {
    id: "bookings",
    title: "BOOKINGS AND RENTAL",
    links: [
      {
        id: "airport-shuttle",
        type: "external",
        href: "https://bluehouse.tourdesk.is/Transportation",
        label: "Book Airport Shuttle",
        icon: Bus,
        newTab: true,
      },
      {
        id: "book-room",
        type: "external",
        href: "https://beds24.com/booking2.php?propid=3578&layout=1",
        label: "Book a Room",
        icon: Door,
        newTab: true,
      },
      {
        id: "day-tours",
        type: "external",
        href: "https://bluehouse.tourdesk.is/Tour",
        label: "Book Day Tours",
        icon: Tour,
        newTab: true,
      },
      {
        id: "rent-car",
        type: "external",
        href: "https://bluehouse.tourdesk.is/CarRental",
        label: "Rent a Car",
        icon: Car,
        newTab: true,
      },
    ],
  },
  {
    id: "general",
    title: "GENERAL INFORMATION",
    links: [
      {
        id: "accommodation",
        type: "scroll",
        target: "ACCOMMODATION_DESKTOP",
        label: "Accommodation Options",
        icon: Accommodation,
      },
      {
        id: "recommendations",
        type: "scroll",
        target: "RECOMMENDATIONS",
        label: "Recommendations",
        icon: Bag,
      },
      {
        id: "about",
        type: "route",
        to: "/about-us",
        label: "About us",
        icon: Aboutus,
      },
    ],
  },
  {
    id: "support",
    title: "HELP AND SUPPORT",
    links: [
      {
        id: "faq",
        type: "external",
        href: "https://bluehouseis.zohodesk.eu/portal/en/home",
        label: "FAQ",
        icon: Info,
        newTab: true,
      },
      {
        id: "support",
        type: "external",
        href: "https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460",
        label: "Support",
        icon: supportImage,
        newTab: true,
      },
      {
        id: "forum",
        type: "external",
        href: "https://bluehouseis.zohodesk.eu/portal/en/community/guestforum",
        label: "Forum",
        icon: forumImage,
        newTab: true,
      },
      {
        id: "feedback",
        type: "external",
        href: "https://bluehouseis.zohodesk.eu/portal/en/community/guestforum",
        label: "Feedback",
        icon: feedbackImage,
        newTab: true,
      },
      {
        id: "map",
        type: "scroll",
        target: "MAP",
        label: "Map",
        icon: LocationIcon,
      },
    ],
  },
]);

const SOCIAL_LINKS = Object.freeze([
  {
    id: "instagram",
    href: "https://www.instagram.com/bluehousebb/",
    label: "Instagram",
    icon: Instagram,
    newTab: true,
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/bluehouseiceland",
    label: "Facebook",
    icon: Facebook,
    newTab: true,
  },
  {
    id: "whatsapp",
    href: "https://api.whatsapp.com/send?phone=3547756480&text=&source=&data=",
    label: "Whatsapp",
    icon: Whatsapp,
    newTab: true,
  },
  {
    id: "email",
    href: "mailto:info@bluehouse.is",
    label: "Email",
    icon: Email,
  },
]);

const CONTACT_LINES = Object.freeze([
  { id: "business-name", label: "Blue House B&B" },
  {
    id: "contact-email",
    label: "info@bluehouse.is",
    href: "mailto:info@bluehouse.is",
  },
  {
    id: "contact-phone",
    label: "+354 775 6480",
    href: "tel:+3547756480",
  },
]);

function SideNavbar({ isOpen, onClose }) {
  const location = useLocation();
  const history = useHistory();

  const closeNav = useCallback(() => {
    if (typeof onClose === "function") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeNav();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeNav]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { style: bodyStyle } = document.body;
    const { style: rootStyle } = document.documentElement;
    const previous = {
      bodyOverflow: bodyStyle.overflow,
      bodyTouchAction: bodyStyle.touchAction,
      rootOverflow: rootStyle.overflow,
    };

    bodyStyle.overflow = "hidden";
    bodyStyle.touchAction = "none";
    rootStyle.overflow = "hidden";

    return () => {
      bodyStyle.overflow = previous.bodyOverflow;
      bodyStyle.touchAction = previous.bodyTouchAction;
      rootStyle.overflow = previous.rootOverflow;
    };
  }, [isOpen]);

  const isHomePage = location.pathname === "/";

  const navigateAndScroll = useCallback(
    (target) => {
      const scrollToTarget = () => scroller.scrollTo(target, SCROLL_OPTIONS);

      if (isHomePage) {
        scrollToTarget();
        closeNav();
        return;
      }

      history.push("/");
      window.setTimeout(() => {
        scrollToTarget();
        closeNav();
      }, 400);
    },
    [closeNav, history, isHomePage]
  );

  const overlayClasses = useMemo(
    () =>
      [styles.overlay, isOpen ? styles["overlay--active"] : ""].filter(Boolean).join(" "),
    [isOpen]
  );

  const navClasses = useMemo(
    () =>
      [styles.sideNav, isOpen ? styles["sideNav--open"] : ""].filter(Boolean).join(" "),
    [isOpen]
  );

  const renderLink = (link) => {
    const icon = (
        <img src={link.icon} alt="" className={styles.iconImage} />
    );

    const label = (
      <span>
        <WithTransLate text={link.label} />
      </span>
    );

    if (link.type === "external") {
      return (
        <li key={link.id}>
          <a
            href={link.href}
            target={link.newTab ? "_blank" : "_self"}
            rel={link.newTab ? "noreferrer" : undefined}
            className={styles.link}
            onClick={closeNav}
          >
            {icon}
            {label}
          </a>
        </li>
      );
    }

    if (link.type === "route") {
      return (
        <li key={link.id}>
          <RouterLink to={link.to} className={styles.link} onClick={closeNav}>
            {icon}
            {label}
          </RouterLink>
        </li>
      );
    }

    if (link.type === "scroll") {
      return (
        <li key={link.id}>
          <button
            type="button"
            className={styles.link}
            onClick={() => navigateAndScroll(link.target)}
          >
            {icon}
            {label}
          </button>
        </li>
      );
    }

    return null;
  };

  return (
    <>
      <div className={overlayClasses} onClick={closeNav} aria-hidden={!isOpen} />

      <aside className={navClasses} aria-hidden={!isOpen} aria-label="Site navigation">

        <div className={styles.sideNavHeader}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeNav}
            aria-label="Close menu"
          >
            <img src={Escape} alt="" className={styles.closeIcon} />
          </button>

          <RouterLink to="/" onClick={closeNav} className={styles.logoLink}>
            <img src={Logo} alt="Bluehouse logo" className={styles.logo} />
          </RouterLink>
        </div>

        <div className={styles.languageWrapper}>
          <TranslateMe scroll={closeNav} />
        </div>

        <hr className={styles.divider} />

        <nav className={styles.sections} aria-label="Primary navigation sections">
          {NAV_SECTIONS.map((section) => (
            <section key={section.id}>
              <p className={styles.sectionHeading}>
                <WithTransLate text={section.title} />
              </p>
              <ul className={styles.linkList}>{section.links.map(renderLink)}</ul>
            </section>
          ))}
        </nav>

        <section className={styles.contactSection} aria-label="Contact information">
          <p className={styles.sectionHeading}>
            <WithTransLate text="Contact us" />
          </p>

          <div className={styles.socialList}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target={social.newTab ? "_blank" : undefined}
                rel={social.newTab ? "noreferrer" : undefined}
                className={styles.socialLink}
                aria-label={social.label}
                onClick={closeNav}
              >
                <img src={social.icon} alt="" className={styles.socialIcon} />
              </a>
            ))}
          </div>

          <hr className={styles.divider} />

          <ul className={styles.contactList}>
            {CONTACT_LINES.map((line) => (
              <li key={line.id}>
                {line.href ? (
                  <a href={line.href} className={styles.contactLink} onClick={closeNav}>
                    {line.label}
                  </a>
                ) : (
                  <span className={styles.contactText}>{line.label}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </>
  );
}

SideNavbar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

SideNavbar.defaultProps = {
  isOpen: false,
  onClose: undefined,
};

export default SideNavbar;
