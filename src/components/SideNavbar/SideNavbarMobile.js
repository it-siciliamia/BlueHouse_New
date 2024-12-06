/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useHistory } from "react-router-dom";
import { Button, Divider, Grid, makeStyles } from "@material-ui/core";
import TranslateMe, { WithTransLate } from "../helpers/translating";
import Logo from "../../images/Bluehouse.svg";
import Escape from "../../images/escape.svg";
import Door from "../../images/door.svg";
import Tour from "../../images/tour.svg";
import Gallery from "../../images/gallery.svg";
import supportImage from "../../images/support/whiteBackground_support.svg";
import Car from "../../images/car.svg";
import Bag from "../../images/bag.svg";
import Info from "../../images/info.svg";
import aboutus from "../../images/aboutus.svg";
import Location from "../../images/location.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import Whatsapp from "../../images/whatsApp.svg";

const bookingsList = [
  {
    id: 1,
    src: Door,
    href: "https://beds24.com/booking2.php?propid=3578&layout=1",
    text: "Book a Room",
  },
  {
    id: 2,
    src: Tour,
    href: "https://bluehouse.tourdesk.is/Tour",
    text: "Book Day Tours",
  },
  {
    id: 3,
    src: Car,
    href: "https://bluehouse.tourdesk.is/CarRental",
    text: "Rent a Car",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    padding: "30px 6vw 20px",
    transitionDuration: "0.5s",
    position: "fixed",
    zIndex: "5",
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
    "@media (min-width: 661px)": {
      display: "none",
    },
    "&::before": {
      maxWidth: "100vw",
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
    },
  },
  sliderTitle: {
    fontWeight: "700",
    padding: "0",
    margin: "5px 0 21px",
    fontSize: "16px",
    lineHeight: "1",
  },
  sliderLink: {
    margin: "0",
    padding: "0",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1",
  },
  horizontalLine: {
    width: "117%",
    margin: "20px 0 10px -35px",
    border: "0px solid rgba(255, 255, 255, 0.17)",
    background: "rgba(255, 255, 255, 0.17)",
  },
  sliderInfo: {
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "10px",
    margin: "10px 0",
    color: "white",
  },
  sliderLogo: {
    width: "110px",
    marginBottom: "26px",
  },
  sliderHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  sliderEscape: {
    transition: "all 1s",
    width: "fit-content",
    padding: 0,
    "&:focus": {
      outline: "none",
    },
  },
  groupIcons: {
    display: "flex",
    justifyContent: "space-between",
    width: "120px",
    marginBottom: "13px",
  },
  sliderIconss: {
    margin: "0",
    marginLeft: "-3px",
    marginRight: "-8px",
  },
  highlightedColor: {
    color: "white",
    "&:hover": {
      color: "#1E90FF !important",
    },
  },
  socialIcons: {
    transform: "scale(.9)",
  },
  linksWrapper: {
    padding: "17px 1vw 0",
  },
  linksList: {
    margin: "0",
    padding: "0 0 21px 0",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    "& li": {
      listStyle: "none",
      display: "flex",
      justifyContent: "start",
      gap: "15px",
      "& img": {
        objectFit: "contain",
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    sliderEscape: {
      minWidth: "20px",
    },
  },
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
  } = useStyles(props);
  const { handleOpenAndCloseSideNavbar } = props;
  const location = useLocation();
  const history = useHistory();

  const scroll = () => handleOpenAndCloseSideNavbar("-200%");

  const isHomePage = location.pathname === "/";
  const navigateAndScroll = (to) => {
    if (!isHomePage) {
      history.push("/");
      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -70,
        });
      }, 500);
      scroll();
    } else {
      scroller.scrollTo(to, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
      scroll();
    }
  };

  return (
    <div className={root}>
      <div className={sliderHeader}>
        <RouterLink onClick={scroll} to="/">
          <img src={Logo} alt="Bluehouse_logo" className={sliderLogo} />
        </RouterLink>
        <Button className={sliderEscape} onClick={scroll}>
          <img src={Escape} alt="Close icon" />
        </Button>
      </div>

      <TranslateMe scroll={scroll} />

      <Divider className={horizontalLine} />

      <div className={linksWrapper}>
        <p className={sliderTitle}>
          <WithTransLate text="BOOKINGS AND RENTALS" />
        </p>

        <ul className={linksList}>
          {bookingsList.map((item) => (
            <li key={item.id}>
              <img
                className={sliderIcons}
                style={{ marginRight: "-3px" }}
                src={item.src}
                alt="Bookings List"
              />
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={highlightedColor}
              >
                <WithTransLate text={item.text} />
              </a>
            </li>
          ))}
        </ul>

        <p className={sliderTitle}>
          <WithTransLate text="GENERAL INFORMATION" />
        </p>

        <ul className={linksList}>
          <li>
            <img
              className={sliderIconss}
              src={Gallery}
              alt="Scroll to Gallery"
            />
            <RouterLink
              className={highlightedColor}
              to="/#GALLERY"
              onClick={() => navigateAndScroll("GALLERY")}
            >
              <WithTransLate text="Gallery" />
            </RouterLink>
          </li>

          <li>
            <img
              className={sliderIconss}
              src={Bag}
              alt="Scroll to Recommendations"
            />
            <RouterLink
              className={highlightedColor}
              to="/#RECOMMENDATIONS"
              onClick={() => navigateAndScroll("RECOMMENDATIONS")}
            >
              <WithTransLate text="Recommendations" />
            </RouterLink>
          </li>

          <li>
            <img
              className={sliderIconss}
              style={{ marginLeft: "-2px" }}
              src={aboutus}
              alt="Scroll to About Us"
            />
            <RouterLink
              className={highlightedColor}
              to="/about-us"
              onClick={scroll}
            >
              <WithTransLate text="About us" />
            </RouterLink>
          </li>
        </ul>

        <p className={sliderTitle}>
          <WithTransLate text="HELP AND SUPPORT" />
        </p>

        <ul className={linksList}>
          <li>
            <img
              className={sliderIconss}
              style={{ height: "19px", marginLeft: "0", paddingRight: "5px" }}
              src={supportImage}
              alt="Scroll to Support"
            />
            <RouterLink
              className={highlightedColor}
              to="/#SUPPORT"
              onClick={() => navigateAndScroll("SUPPORT")}
            >
              <WithTransLate text="Support" />
            </RouterLink>
          </li>

          <li>
            <img
              className={sliderIconss}
              style={{ marginLeft: "-3px", paddingRight: "4px" }}
              src={Info}
              alt="Slider Info"
            />
            <a
              href="https://bluehouseis.zohodesk.eu/portal/en/home"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <WithTransLate text="FAQ" />
            </a>
          </li>

          <li>
            <img
              className={sliderIconss}
              style={{ height: "19px", marginLeft: "0", paddingRight: "5px" }}
              src={Location}
              alt="Scroll to Map"
            />
            <RouterLink
              className={highlightedColor}
              to="/#MAP"
              onClick={() => navigateAndScroll("MAP")}
            >
              <WithTransLate text="Map" />
            </RouterLink>
          </li>
        </ul>
      </div>

      <Grid container direction="column">
        <p className={sliderTitle}>
          <WithTransLate text="CONTACT US" />
        </p>

        <div className={groupIcons}>
          <a
            onClick={() => navigateAndScroll("CONTACT US")}
            href="https://www.instagram.com/bluehousebb/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={socialIcons} src={Instagram} alt="Social Network" />
          </a>
          <a
            onClick={scroll}
            href="https://www.facebook.com/bluehouseiceland"
            target="_blank"
            rel="noreferrer"
          >
            <img className={socialIcons} src={Facebook} alt="Facebook" />
          </a>
          <a
            onClick={scroll}
            href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
            target="_blank"
            rel="noreferrer"
          >
            <img className={socialIcons} src={Whatsapp} alt="Whatsapp" />
          </a>
        </div>

        <Divider className={horizontalLine} />

        <p className={sliderInfo}>Blue House B&B</p>
        <a
          onClick={scroll}
          href="mailto:info@bluehouse.is"
          target="_blank"
          rel="noreferrer"
          className={highlightedColor}
        >
          <p className={sliderInfo}>info@bluehouse.is</p>{" "}
        </a>
        <a onClick={scroll} href="tel:+3547756480">
          <p className={sliderInfo}>+354 775 6480</p>
        </a>
      </Grid>
    </div>
  );
}

export default SideNavbarMobile;
