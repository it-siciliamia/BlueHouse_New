/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useHistory } from "react-router-dom";
import { Button, Divider, Grid, makeStyles } from "@material-ui/core";
import TranslateMe, { WithTransLate } from "../helpers/translating";

/* IMAGES */
import Logo from "../../images/Bluehouse.svg";
import Escape from "../../images/escape.svg";

/* Booking & info icons */
import Door from "../../images/door.svg";
import Tour from "../../images/tour.svg";
import Accommodation from "../../images/gallery.svg"; // same asset as desktop, renamed for clarity
import Car from "../../images/car.svg";
import Bag from "../../images/bag.svg";
import Info from "../../images/info.svg";
import aboutus from "../../images/aboutus.svg";
import Location from "../../images/location.svg";

/* Social icons */
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import Whatsapp from "../../images/whatsApp.svg";
import Email from "../../images/email.svg";

/* Support icons */
import supportImage from "../../images/support/whiteBackground_support.svg";
import forumImage from "../../images/support/whiteBackground_forum.svg";
import feedbackImage from "../../images/support/whiteBackground_feedback.svg";

/* Keep the same booking items (open in a new tab) */
const bookingsList = [
  { id: 1, src: Door, href: "https://beds24.com/booking2.php?propid=3578&layout=1", text: "Book a Room" },
  { id: 2, src: Tour, href: "https://bluehouse.tourdesk.is/Tour", text: "Book Day Tours" },
  { id: 3, src: Car, href: "https://bluehouse.tourdesk.is/CarRental", text: "Rent a Car" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: "30px 6vw 20px",
    transitionDuration: "0.5s",
    position: "fixed",
    zIndex: 5,
    top: (props) => props.top,
    left: 0,
    right: 0,
    bottom: 0,
    color: theme.palette.primary.main,
    background: theme.palette.secondary.main,
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 661px)": { display: "none" },
    "&::before": {
      maxWidth: "100vw",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
    },
  },

  /* Figma-like divider under "Select language" */
  languageDivider: {
    width: "100%",
    height: 1,
    background: "rgba(255,255,255,0.32)",
    marginTop: "clamp(10px, 2vh, 16px)",
    marginBottom: "clamp(18px, 3vh, 24px)",
  },

  sliderTitle: {
    fontWeight: 700,
    padding: 0,
    margin: "5px 0 21px",
    fontSize: 16,
    lineHeight: 1,
  },
  sliderLink: {
    margin: 0,
    padding: 0,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1,
    color: "inherit",
    textDecoration: "inherit",
  },
  horizontalLine: {
    width: "117%",
    margin: "20px 0 10px -35px",
    border: "0px solid rgba(255, 255, 255, 0.17)",
    background: "rgba(255, 255, 255, 0.17)",
  },
  sliderInfo: {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: "10px",
    margin: "10px 0",
    color: "white",
  },
  sliderLogo: { width: 110, marginBottom: 26 },
  sliderHeader: { display: "flex", alignItems: "flex-start", justifyContent: "space-between" },
  sliderEscape: {
    transition: "all 1s",
    width: "fit-content",
    padding: 0,
    "&:focus": { outline: "none" },
  },

  /* NOTE: Preserved original values to avoid layout shifts */
  groupIcons: { display: "flex", justifyContent: "space_between", width: 120, marginBottom: 13 },

  /* Icon styles (kept sizing logic; added sliderIcons to match usage) */
  sliderIcons: { margin: 0 },
  sliderIconss: { margin: 0, marginLeft: -3, marginRight: -8 },

  highlightedColor: {
    color: "white",
    textDecoration: "none",
    "&:link, &:visited": { color: "white", textDecoration: "none" },
    "&:hover, &:focus, &:active": {
      color: "white !important",
      textDecoration: "underline",
      textDecorationThickness: "from-font",
      textUnderlineOffset: "2px",
    },
    "& p": { color: "inherit", textDecoration: "inherit" },
    "&:hover p, &:focus p, &:active p": { color: "inherit", textDecoration: "inherit" },
  },

  socialIcons: { transform: "scale(.9)" },
  linksWrapper: { padding: "17px 1vw 0" },
  linksList: {
    margin: 0,
    padding: "0 0 21px 0",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    "& li": {
      listStyle: "none",
      display: "flex",
      justifyContent: "start",
      gap: "15px",
      "& img": { objectFit: "contain" },
    },
  },
  [theme.breakpoints.down("sm")]: { sliderEscape: { minWidth: 20 } },
}));

function SideNavbarMobile(props) {
  const {
    sliderHeader,
    linksList,
    linksWrapper,
    root,
    sliderTitle,
    sliderInfo,
    sliderLogo,
    groupIcons,
    socialIcons,
    sliderIcons,
    sliderIconss,
    sliderEscape,
    horizontalLine,
    highlightedColor,
    languageDivider,
  } = useStyles(props);

  const { handleOpenAndCloseSideNavbar } = props;
  const location = useLocation();
  const history = useHistory();

  // Close mobile sidebar by moving it off-screen
  const scroll = () => handleOpenAndCloseSideNavbar("-200%");

  // Smoothly navigate to homepage (if needed) and scroll to an anchor
  const isHomePage = location.pathname === "/";
  const navigateAndScroll = (to) => {
    if (!isHomePage) {
      history.push("/");
      setTimeout(() => {
        scroller.scrollTo(to, { duration: 500, delay: 0, smooth: "easeInOutQuart", offset: -70 });
      }, 500);
      scroll();
    } else {
      scroller.scrollTo(to, { duration: 500, delay: 0, smooth: "easeInOutQuart", offset: -70 });
      scroll();
    }
  };

  return (
    <div className={root}>
      {/* Header */}
      <div className={sliderHeader}>
        <RouterLink onClick={scroll} to="/">
          <img src={Logo} alt="Bluehouse_logo" className={sliderLogo} />
        </RouterLink>
        <Button className={sliderEscape} onClick={scroll}>
          <img src={Escape} alt="Close icon" />
        </Button>
      </div>

      {/* Language */}
      <TranslateMe scroll={scroll} />
      <div className={languageDivider} />

      {/* Bookings */}
      <div className={linksWrapper}>
        <p className={sliderTitle}>
          <WithTransLate text="BOOKINGS AND RENTALS" />
        </p>

        <ul className={linksList}>
          {bookingsList.map((item) => (
            <li key={item.id}>
              <img className={sliderIcons} style={{ marginRight: "-3px" }} src={item.src} alt="Bookings List" />
              {/* Bookings stay in a new tab as before */}
              <a href={item.href} target="_blank" rel="noreferrer" className={highlightedColor}>
                <WithTransLate text={item.text} />
              </a>
            </li>
          ))}
        </ul>

        {/* General info */}
        <p className={sliderTitle}>
          <WithTransLate text="GENERAL INFORMATION" />
        </p>

        <ul className={linksList}>
          {/* CHANGED: Match desktop — anchor + text */}
          <li>
            <img className={sliderIconss} src={Accommodation} alt="Scroll to Accommodation Options" />
            <RouterLink
              className={highlightedColor}
              to="/#ACCOMMODATION_DESKTOP"
              onClick={() => navigateAndScroll("ACCOMMODATION_DESKTOP")}
            >
              <WithTransLate text="Accommodation Options" />
            </RouterLink>
          </li>

          <li>
            <img className={sliderIconss} src={Bag} alt="Scroll to Recommendations" />
            <RouterLink
              className={highlightedColor}
              to="/#RECOMMENDATIONS"
              onClick={() => navigateAndScroll("RECOMMENDATIONS")}
            >
              <WithTransLate text="Recommendations" />
            </RouterLink>
          </li>

          <li>
            <img className={sliderIconss} style={{ marginLeft: "-2px" }} src={aboutus} alt="Scroll to About Us" />
            <RouterLink className={highlightedColor} to="/about-us" onClick={scroll}>
              <WithTransLate text="About us" />
            </RouterLink>
          </li>
        </ul>

        {/* Help & Support (strict order) */}
        <p className={sliderTitle}>
          <WithTransLate text="HELP AND SUPPORT" />
        </p>

        <ul className={linksList}>
          {/* 1) FAQ — open in the same tab */}
          <li>
            <img className={sliderIconss} style={{ marginLeft: "-3px", paddingRight: "4px" }} src={Info} alt="Slider Info" />
            <a href="https://bluehouseis.zohodesk.eu/portal/en/home" className={highlightedColor}>
              <WithTransLate text="FAQ" />
            </a>
          </li>

          {/* 2) Support — same tab */}
          <li>
            <img
              className={sliderIconss}
              style={{ height: "19px", marginLeft: "0", paddingRight: "5px" }}
              src={supportImage}
              alt="Scroll to Support"
            />
            <a
              className={highlightedColor}
              href="https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460"
            >
              <WithTransLate text="Support" />
            </a>
          </li>

          {/* 3) Forum — same tab */}
          <li>
            <img className={sliderIconss} style={{ height: "19px", marginLeft: "0", paddingRight: "5px" }} src={forumImage} alt="Slider Forum" />
            <a className={highlightedColor} href="https://bluehouseis.zohodesk.eu/portal/en/community/guestforum">
              <WithTransLate text="Forum" />
            </a>
          </li>

          {/* 4) Feedback — same tab (same link for now) */}
          <li>
            <img className={sliderIconss} style={{ height: "19px", marginLeft: "0", paddingRight: "5px" }} src={feedbackImage} alt="Slider Feedback" />
            <a className={highlightedColor} href="https://bluehouseis.zohodesk.eu/portal/en/community/guestforum">
              <WithTransLate text="Feedback" />
            </a>
          </li>

          {/* 5) Map */}
          <li>
            <img className={sliderIconss} style={{ height: "19px", marginLeft: "0", paddingRight: "5px" }} src={Location} alt="Scroll to Map" />
            <RouterLink className={highlightedColor} to="/#MAP" onClick={() => navigateAndScroll("MAP")}>
              <WithTransLate text="Map" />
            </RouterLink>
          </li>
        </ul>
      </div>

      {/* Contacts */}
      <Grid container direction="column">
        <p className={sliderTitle}><WithTransLate text="CONTACT US" /></p>

        {/* ADDED: Email icon as the 4th icon to mirror desktop */}
        <div className={groupIcons}>
          <a onClick={() => navigateAndScroll("CONTACT US")} href="https://www.instagram.com/bluehousebb/" rel="noreferrer">
            <img className={socialIcons} src={Instagram} alt="Instagram" />
          </a>
          <a onClick={scroll} href="https://www.facebook.com/bluehouseiceland" rel="noreferrer">
            <img className={socialIcons} src={Facebook} alt="Facebook" />
          </a>
          <a onClick={scroll} href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data=" rel="noreferrer">
            <img className={socialIcons} src={Whatsapp} alt="Whatsapp" />
          </a>
          <a onClick={scroll} href="mailto:info@bluehouse.is" rel="noreferrer">
            <img className={socialIcons} src={Email} alt="Email" />
          </a>
        </div>

        <Divider className={horizontalLine} />

        <p className={sliderInfo}>Blue House B&B</p>
        <a onClick={scroll} href="mailto:info@bluehouse.is" className={highlightedColor}>
          <p className={sliderInfo}>info@bluehouse.is</p>
        </a>
        <a onClick={scroll} href="tel:+3547756480">
          <p className={sliderInfo}>+354 775 6480</p>
        </a>
      </Grid>
    </div>
  );
}

export default SideNavbarMobile;
