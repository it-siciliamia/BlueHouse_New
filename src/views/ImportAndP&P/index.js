import React from "react";
import Privacy from "./Privacy.js";
import { makeStyles } from "@material-ui/core/styles";
import Imagemobile from "../../images/privacy_mobile.png";
import Image from "../../images/privacy.jpg";
import { WithTransLate } from "../../translating/index";
import CookiePolicy from "./CookiePolicy.js";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "95%",
    height: "auto",
    marginLeft: "65px",
    marginBottom: "70px",

    "@media (max-width: 744px)": {
      display: "none",
    },
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    transform: "rotate(-90deg)",
    height: "24px",
    width: "24px",
    margin: "386px -25px -227px -171px",
    fontFamily: "Oblik",
    fontSize: "24px",
    lineHeight: "50px",
    letterSpacing: "0.1em",
    color: "#14202B",
    whiteSpace: "nowrap",

    "@media (max-width: 1439px)": {
      margin: "370px -40px -227px -171px",
      fontSize: "22px",
    },

    "@media (max-width: 900px)": {
      margin: "300px -50px -227px -171px",
      fontSize: "18px",
    },
    "@media (max-width: 744px)": {
      display: "none",
    },
  },
  imageStyle2: {
    "@media (min-width: 745px)": {
      display: "none",
    },
    
    flexGrow: 1,
    margin: "0 0 40px",
    paddingInline: "15px",
    width: "100%",

    "@media (max-width: 600px)": {
      marginTop: "32%",
    },

    "@media (max-width: 470px)": {
      marginTop: "40%",
    },

    "@media (max-width: 375px)": {
      marginTop: "50%",
    },
  },
  houseRules: {
    margin: "0 10px 0 60px",

    "@media (max-width: 1024px)": {
      margin: "0 10px 0 50px",
    },

    "@media (max-width: 900px)": {
      margin: "0 0 0 42px",
    },

    "@media (max-width: 744px)": {
      margin: "0 15px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    header: {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  },
}));

function PrivacyPolicy() {
  const {
    imageStyle,
    title,
    imageStyle2,
    houseRules,
    header,
    root,
  } = useStyles();
  return (
    <div className={root}>
      <div className={header}>
        <p className={title}>
          <WithTransLate text="IMPRINT AND PRIVACY POLICY" />
        </p>

        <img src={Imagemobile} alt="" className={imageStyle2} />
        
        <img src={Image} alt="" className={imageStyle} />
      </div>

      <div className={houseRules}>
        <Privacy />

        <CookiePolicy />
      </div>
    </div>
  );
}

export default PrivacyPolicy;
