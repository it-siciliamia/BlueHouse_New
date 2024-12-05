import React from "react";
import { makeStyles } from "@material-ui/core";
import notFound from "../../images/notFound.webp";
import logo from "../../images/notFoundBlueHouseLogo.svg";
import { Link } from "react-router-dom";
import { WithTransLate } from "../../components/helpers/translating/index";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${notFound})`,
    backgroundSize: "cover",
    backgroundPosition: " 90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    textAlign: "center",
    padding: "60px 30px",
    zIndex: 1,
    [theme.breakpoints.up("xs")]: {
      padding: "120px",
      justifyContent: "start",
    },
    "& *": {
      color: "#fff !important",
    },
  },
  logoStyle: {
    maxHeight: "50%",
    maxWidth: "90%",
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      marginBottom: "10px",
    },
  },

  font404: {
    fontSize: "120px",
    fontFamily: "Josefin Sans",
    marginBottom: "-20px",
    fontWeight: "400",
    [theme.breakpoints.down("xs")]: {
      fontSize: "64px",
      marginBottom: "10px",
    },
  },

  smallFont: {
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "34px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      fontWeight: "regular",
    },
  },
  largeFont: {
    fontSize: "36px",
    fontWeight: "bold",
    fontFamily: "Josefin Sans",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
  },
  absoluteBottomCenter: {
    // position: 'absolute',
    // bottom: '15%',
    // left: '62%',
    textAlign: "center",
    //   [theme.breakpoints.down("xs")]:{
    //   top:"45%",
    //   transform: 'translateX(-70%)',
    // }
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      bottom: "12%",
      left: "62%",
    },
    [theme.breakpoints.only("md")]: {
      position: "absolute",
      bottom: "20%",
      left: "60%",
    },
  },
}));

function Notfound() {
  const {
    root,
    logoStyle,
    font404,
    smallFont,
    largeFont,
    absoluteBottomCenter,
  } = useStyles();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className={root}>
        <div>
          <img src={logo} alt="logo" className={logoStyle} />
          <h2 className={font404}>404</h2>
          <p className={largeFont}>
            <WithTransLate text="Page Not Found" />
          </p>
        </div>
        <div className={absoluteBottomCenter}>
          <p className={smallFont}>
            <WithTransLate text="Hi, this page is on vacation." />
          </p>
          <p className={largeFont}>
            <WithTransLate text="You should be too." />
          </p>
          <p className={smallFont}>
            <WithTransLate text="Find the best price now on" />{" "}
            <Link to="/">
              <u>bluehouse.</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
