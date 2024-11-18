import { Box, makeStyles } from "@material-ui/core";
import selfie from "../../images/selfie.jpg";
import { Element } from "react-scroll";
import React from "react";
import { Link } from "react-router-dom";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "130px 0px 75px",
    [theme.breakpoints.down("md")]: {
      width: "fit-content",
      margin: "100px auto",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  titleStyle: {
    fontFamily: "Oblik",
    transform: "rotate(-90deg)",
    height: "fit-content",
    width: "fit-content",
    margin: "0 0 0 -58px",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    marginTop: "-13px",
  },
  outLinedImage: {
    width: "auto",
    height: "420px",
    padding: "2%",
    border: "1px solid #1D3967",
    marginLeft: "-2%",
  },
  selfieStyle: {
    width: "495px",
    height: "462px",
    marginTop: "-90px",
    objectFit: "cover",
    [theme.breakpoints.up("lg")]: {
      width: "35vw",
    },
  },
  description: {
    fontSize: "24px",
    fontWeight: 300,
    fontFamily: "Josefin Sans",
    lineHeight: "30px",
    letterSpacing: "0.10em",
    textAlign: "center",
  },
  descriptionWrapper: {
    alignItems: "center",
    gap: "30px",
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      height: "auto",
      width: "553.6px",
      gap: "auto",
    },
  },
  content: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "40px",
    },
  },
  KnowMore: {
    border: "1px solid #1D3967",
    width: "280px !important" ,
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "Josefin Sans",
    fontSize: "16px",
    lineHeight: "16px",
    textAlign: "center",
    color:'#1D3967',
    background:'#fff',
    display: "block",
    height: "46px",
    padding: "16px",
    fontWeight:'600',
    "&:hover": {
      background: "#1D3967",
      color:'#fff'
    },
    [theme.breakpoints.down("md")]: {
      width: "270px",
      height: "60px",
      marginLeft: "60px",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function AboutUs() {
  const {
    root,
    content,
    titleStyle,
    outLinedImage,
    selfieStyle,
    description,
    descriptionWrapper,
    KnowMore,
  } = useStyles();
  return (
    <Element id="aboutus">
      <Box className={root}>
        <h1 className={titleStyle}>
          <WithTransLate text="ABOUT US" />{" "}
        </h1>
        <div className={content}>
          <div className={outLinedImage}>
            <img className={selfieStyle} alt="selfie" src={selfie} />
          </div>
          <div className={descriptionWrapper}>
            <p className={description}>
              <WithTransLate text="Blue House Bed and Breakfast welcomes you to your home away from home in Reykjavik, Iceland. Simply put, we are a small team of globetrotters, passionate about unforgettable travel experiences." />
            </p>
            <Link to="/About-us" className={KnowMore}>
                  <WithTransLate text="DISCOVER MORE" />
            </Link>
          </div>
        </div>
      </Box>
    </Element>
  );
}
