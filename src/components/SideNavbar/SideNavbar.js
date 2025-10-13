/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Button, Divider, Grid, makeStyles } from "@material-ui/core";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useLocation, useHistory } from "react-router-dom";
import Logo from "../../images/Bluehouse.svg";
import Bus from "../../images/shuttle.svg";
import Escape from "../../images/escape.svg";
import Aboutus from "../../images/aboutus.svg";
import Door from "../../images/door.svg";
import Tour from "../../images/tour.svg";
import Gallery from "../../images/gallery.svg";
import supportImage from "../../images/support/whiteBackground_support.svg";
import forumImage from "../../images/support/whiteBackground_forum.svg";
import Car from "../../images/car.svg";
import Bag from "../../images/bag.svg";
import Info from "../../images/info.svg";
import Location from "../../images/location.svg";
import Instagram from "../../images/instagram.svg";
import Facebook from "../../images/facebook.svg";
import Whatsapp from "../../images/whatsApp.svg";
import { Link as RouterLink } from "react-router-dom";
import TranslateMe, { WithTransLate } from "../helpers/translating";

const useStyles = makeStyles((theme) => ({
  root: {
    transitionDuration: "0.5s",
    position: "fixed",
    zIndex: "5",
    top: 0,
    right: (props) => props.right,
    bottom: 0,
    color: theme.palette.primary.main,
    padding: "25px 2vw",
    background: theme.palette.secondary.main,
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    maxWidth: "22vw",
    gap: "0px",
    [theme.breakpoints.down("md")]: {
      width: "48.9%",
      maxWidth: "none",
    },
    "@media (max-width: 601px)": {
      display: "none",
    },
    "&::before": {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
    },
  },
  sliderTitle: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "2px",
    padding: "10px 0 20px 0",
    marginTop: "5px",
  },
  sliderLink: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "5px",
    cursor: "pointer",
  },
  sliderTitle2: {
    fontSize: "16px",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  },
  horizontalLine: {
    width: "117%",
    margin: "20px 0 20px -35px",
    border: "0px solid rgba(255, 255, 255, 0.17)",
    background: "rgba(255, 255, 255, 0.17)",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 10px -35px",
    },
  },
  sliderInfo: {
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "10px",
    margin: "10px 0",
    color: "white",
  },
  sliderLogo: {
    width: "144px",
    marginBottom: "20px",
  },
  sliderEscape: {
    position: "fixed",
    transition: "all 1s",
    right: (props) => (props.right === 0 ? "20px" : "-100px"),
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
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
    },
  },
  sliderIcons: {
    transform: "scale(1.2)",
    marginTop: "-22px",
    marginLeft: "-5px",
  },
  sliderIconss: {
    transform: "scale(1.0)",
    marginTop: "-26px",
    marginLeft: "-5px",
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
    padding: "25px 1vw",
  },
  contactus: {
    marginLeft: "10px",
  },
  feedback: {
    display: "none",
  },
  support: {
    display: "none",
  },
  forum: {
    display: "none",
  },
}));

function SideNavbar(props) {
  const {
    linksWrapper,
    root,
    sliderTitle,
    sliderLink,
    sliderInfo,
    sliderLogo,
    groupIcons,
    sliderTitle2,
    socialIcons,
    sliderIcons,
    sliderIconss,
    sliderEscape,
    horizontalLine,
    contactus,
    highlightedColor,
    bg,
  } = useStyles(props);
  const { handleOpenAndCloseSideNavbar } = props;
  const location = useLocation();
  const history = useHistory();

  const scroll = () => handleOpenAndCloseSideNavbar("-6000px");

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
      <div className={bg} />
      <RouterLink onClick={scroll} to="/">
        <img src={Logo} alt="Bluehouse_logo" className={sliderLogo} />
      </RouterLink>
      <Button className={sliderEscape} onClick={scroll}>
        <img src={Escape} alt="Close" />
      </Button>
      <TranslateMe scroll={scroll} />
      <Divider className={horizontalLine} />
      <Grid className={linksWrapper} container spacing={3}>
        <Grid
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <p className={sliderTitle}>
            <WithTransLate text="BOOKINGS AND RENTAL" />
          </p>
        </Grid>
        <Grid
          component="a"
          href="https://bluehouse.tourdesk.is/Transportation"
          target="_blank"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={highlightedColor}
        >
          <Grid item>
            <img className={sliderIcons} src={Bus} alt="Slider Bus" />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="Book Airport Shuttle" />
            </p>
          </Grid>
        </Grid>
        <Grid
          component="a"
          href="https://beds24.com/booking2.php?propid=3578&layout=1"
          target="_blank"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={highlightedColor}
        >
          <Grid item>
            <img className={sliderIcons} src={Door} alt="Slider Door" />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="Book a Room" />
            </p>
          </Grid>
        </Grid>
        <Grid
          component="a"
          href="https://bluehouse.tourdesk.is/Tour"
          target="_blank"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={highlightedColor}
        >
          <Grid item>
            <img className={sliderIcons} src={Tour} alt="Slider Tour" />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="Book Day Tours" />
            </p>
          </Grid>
        </Grid>
        <Grid
          component="a"
          href="https://bluehouse.tourdesk.is/CarRental"
          target="_blank"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={highlightedColor}
        >
          <Grid item>
            <img className={sliderIcons} src={Car} alt="Slider Car" />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="Rent a Car" />
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <p className={sliderTitle}>
            <WithTransLate text="GENERAL INFORMATION" />
          </p>
        </Grid>

        <Grid
          component={RouterLink}
          onClick={() => navigateAndScroll("GALLERY_DESCTOP")}
          to="/#GALLERY_DESCTOP"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={highlightedColor}
        >
          <Grid item>
            <img
              className={sliderIconss}
              src={Gallery}
              alt="Scroll to Gallery"
            />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="Gallery" />
            </p>
          </Grid>
        </Grid>

        <Grid
          component={RouterLink}
          onClick={() => navigateAndScroll("RECOMMENDATIONS")}
          to="/#RECOMMENDATIONS"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={highlightedColor}
        >
          <Grid item>
            <img className={sliderIconss} src={Bag} alt="Slider Bag" />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="Recommendations" />
            </p>
          </Grid>
        </Grid>

        <Grid
          component={RouterLink}
          onClick={scroll}
          to="/about-us"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={highlightedColor}
        >
          <Grid item>
            <img className={sliderIconss} src={Aboutus} alt="Slider About Us" />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="About us" />
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <p className={sliderTitle}>
            <WithTransLate text="HELP AND SUPPORT" />
          </p>
        </Grid>
        <Grid
          onClick={scroll}
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item>
            <img className={sliderIconss} src={Info} alt="Slider Info" />
          </Grid>
          <Grid item>
            <a
              href="https://bluehouseis.zohodesk.eu/portal/en/home"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="FAQ" />
              </p>
            </a>
          </Grid>
        </Grid>
        <Grid
          onClick={scroll}
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item>
            <img
              className={sliderIconss}
              src={supportImage}
              alt="Slider Support"
            />
          </Grid>
          <Grid item>
            <a
              href="https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="Support" />
              </p>
            </a>
          </Grid>
        </Grid>
        <Grid
          onClick={scroll}
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item>
            <img className={sliderIcons} src={forumImage} alt="Slider Forum" />
          </Grid>
          <Grid item>
            <a
              href="https://bluehouseis.zohodesk.eu/portal/en/community/guestforum"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="Forum" />
              </p>
            </a>
          </Grid>
        </Grid>
        {/* <Grid
          onClick={scroll}
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item>
            <img
              className={sliderIconss}
              src={feedbackImage}
              alt="Slider Feedback"
            />
          </Grid>
          <Grid item>
            <a
              href="https://gnl.ladesk.com/219394-Feedback"
              target="_blank"
              rel="noreferrer"
              className={highlightedColor}
            >
              <p className={sliderLink}>
                <WithTransLate text="Feedback" />
              </p>
            </a>
          </Grid>
        </Grid> */}

        <Grid
          component={RouterLink}
          onClick={() => navigateAndScroll("MAP")}
          to="/#MAP"
          container
          item
          spacing={2}
          alignItems="center"
          justifyContent="flex-start"
          className={highlightedColor}
        >
          <Grid item>
            <img
              className={sliderIconss}
              src={Location}
              alt="Slider Location"
            />
          </Grid>
          <Grid item>
            <p className={sliderLink}>
              <WithTransLate text="Map" />
            </p>
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="column" className={contactus}>
        <p className={sliderTitle2}>
          <WithTransLate text="Contact us" />
        </p>
        <div className={groupIcons}>
          <a
            onClick={scroll}
            href="https://www.instagram.com/bluehousebb/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={socialIcons}
              src={Instagram}
              alt="Slider Instagram"
            />
          </a>
          <a
            onClick={scroll}
            href="https://www.facebook.com/bluehouseiceland"
            target="_blank"
            rel="noreferrer"
          >
            <img className={socialIcons} src={Facebook} alt="Slider Facebook" />
          </a>
          <a
            onClick={scroll}
            href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
            target="_blank"
            rel="noreferrer"
          >
            <img className={socialIcons} src={Whatsapp} alt="Slider Whatsapp" />
          </a>
          {/* <a
            onClick={scroll}
            href="https://gnl.ladesk.com/submit_ticket"
            target="_blank"
            rel="noreferrer"
          >
            <img className={socialIcons} src={Email} alt="Slider Email" />
          </a> */}
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

export default SideNavbar;
