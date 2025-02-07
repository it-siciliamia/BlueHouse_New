import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Facebook from "../../images/Header_icons/headerSocialIcons/facebook.svg";
import instaIcon from "../../images/Header_icons/headerSocialIcons/insta.svg";
import houserules_mobile from "../../images/houserules_mobile.png";
import Email from "../../images/Header_icons/headerSocialIcons/email.svg";
import Whatsapp from "../../images/Header_icons/headerSocialIcons/whats.svg";
import { WithTransLate } from "../../components/helpers/translating/index";
import CaruselSliderHome from "./CaruselSliderHome/CaruselSliderHome";

import s from "./HomePage.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    width: "81vw",
    margin: "-55px auto 0",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  "@media only screen and (max-device-width: 1024px)": {
    root: {
      display: "none",
    },
  },
  sliderRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    width: "80vw",
    height: "590px",
    [theme.breakpoints.down("md")]: {
      width: "87vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  "@media(max-width:660px)": {
    root: {
      marginTop: "10vh",
      marginRight: "0px",
      width: "100vw",
    },
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    overflow: "hidden",
    scrollBehavior: "smooth",
    width: "75vw",
    height: "100%",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  gridListTile: {
    height: "100% !important",
    padding: "0 !important",
    width: "100%",
    backgroundSize: "cover",
    position: "relative",
    "@media(max-width:426px)": {
      display: "none",
    },
    "& video": {},
  },
  image: {
    width: "100%",
    height: "100%",
    display: "block",
    margin: "auto",
    objectFit: "contain",
    [theme.breakpoints.up("md")]: {
      width: "100vw",
    },
  },
  video: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "transparent",
    borderRadius: "50%",
    padding: "5px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    boxShadow: "none",
    zIndex: 1,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    "& svg": {
      color: "white",
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  buttonBack: {
    [theme.breakpoints.down("xl")]: {
      left: "12%",
    },
    [theme.breakpoints.down("lg")]: {
      left: "2%",
    },
  },

  buttonNext: {
    [theme.breakpoints.down("xl")]: {
      right: "12%",
    },
    [theme.breakpoints.down("lg")]: {
      right: "2%",
    },
  },
  buttonBackVideo: {
    [theme.breakpoints.down("xl")]: {
      left: "8%",
    },
    [theme.breakpoints.down("lg")]: {
      left: "2%",
    },
  },
  buttonNextVideo: {
    [theme.breakpoints.down("xl")]: {
      right: "8%",
    },
    [theme.breakpoints.down("lg")]: {
      right: "2%",
    },
  },
  indexCircle: {
    transform: "translate(-50%, -100%)",
    top: "100%",
    left: "50%",
    position: "sticky",
    display: "grid",
    gap: "10px",
  },
  indexCircleButton: {
    padding: "15px 5px",
    height: "fit-content",
    background: "none",
    zIndex: "3",
    border: "none",
  },
  socialIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "31px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  iconz: {
    width: "24px",
    height: "24px",
  },
  whats: {
    width: "24px",
    height: "24px",
  },
  trip: {
    width: "100%",
    height: "100%",
  },
  iconzImg: {
    width: "100%",
    height: "100%",
  },
  titleStyle: {
    fontFamily: "Oblik",
    transform: "rotate(-90deg)",
    whiteSpace: "nowrap",
    height: "fit-content",
    width: "fit-content",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    margin: (props) => props.titleMargins,
    [theme.breakpoints.down("sm")]: {
      transform: "none",
      margin: "15px 0 -40px !important",
      width: "unset",
      height: "unset",
      textAlign: "center",
      padding: "0",
      marginBottom: "-35px",
      zIndex: 1,
    },
  },
  sliderReplacement: {
    width: "150vw",
    display: "none",
    backgroundSize: "cover",
    background: `url(${houserules_mobile})`,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media(max-width:767px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "41vh",
      marginTop: "-500px",
    },
  },
}));

export default function Header({ title, titleMargins }) {
  const classes = useStyles({ titleMargins });

  return (
    <div className={s.homeHeader}>
      {title ? (
        <Typography className={classes.titleStyle}>
          <WithTransLate text={title} />
        </Typography>
      ) : (
        <Box className={classes.socialIcons}>
          <a
            href="https://www.instagram.com/bluehousebb/"
            target="_blank"
            rel="noreferrer"
            className={classes.iconz}
          >
            <img
              src={instaIcon}
              title="Instagram"
              alt="instagram"
              className={classes.iconzImg}
            />
          </a>
          <a
            href="https://www.facebook.com/bluehouseiceland"
            target="_blank"
            rel="noreferrer"
            className={classes.iconz}
          >
            <img
              src={Facebook}
              title="facebook"
              alt="facebook"
              className={classes.iconzImg}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
            target="_blank"
            rel="noreferrer"
            className={classes.whats}
          >
            <img
              src={Whatsapp}
              title="Whatsapp"
              alt="whatsapp"
              className={classes.iconzImg}
            />
          </a>
          <a
            href="https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460"
            target="_blank"
            rel="noreferrer"
            className={classes.iconz}
          >
            <img
              src={Email}
              title="Email"
              alt="Email"
              className={classes.iconzImg}
            />
          </a>
        </Box>
      )}
      <Box>
        <CaruselSliderHome />
      </Box>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  titleMargins: PropTypes.string,
};
