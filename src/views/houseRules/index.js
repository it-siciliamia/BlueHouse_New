import React from "react";
import GuideLines from "./GuideLines.js";
import Support from "../../components/SuportComponent/support.js";
import image from "../../images/houserules.jpg";
import image2 from "../../images/houserules_mobile.png";
import { makeStyles } from "@material-ui/core/styles";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "95%",
    height: "auto",
    marginLeft: "65px",
    marginBottom: "100px",
  },
  header: {
    display: "absolute",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  title: {
    transform: "rotate(-90deg)",
    height: "fit-content",
    width: "fit-content",
    margin: "80px -17px -118px -48px",
    fontFamily: "Oblik",
    fontSize: "24px",
    lineHeight: "50px",
    letterSpacing: "0.1em",
    color: "#14202B",
    whiteSpace: "nowrap",
  },
  imageStyle2: {
    flexGrow: 1,
    width: "100%",
    marginTop: "50%",
  },
  [theme.breakpoints.up("sm")]: {
    imageStyle2: {
      display: "none",
    },
  },
  [theme.breakpoints.down("xs")]: {
    header: {
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "center",
    },
    imageStyle: {
      display: "none",
    },
    houseRules: {
      marginTop: "22px",
    },
    title: {
      margin: "24px 0",
      fontSize: "18px",
      transform: "rotate(0)",
    },
  },
}));

function HouseRules() {
  const { imageStyle, title, imageStyle2, houseRules, header } = useStyles();
  return (
    <div>
      <div className={header}>
        <p className={title}>
          <WithTransLate text="HOUSE RULES" />
        </p>
        <img src={image2} alt="HOUSE RULES 1" className={imageStyle2} />
        <img src={image} alt="HOUSE RULES 2" className={imageStyle} />
      </div>
      <div className={houseRules}>
        <GuideLines />
      </div>
      <Support />
    </div>
  );
}

export default HouseRules;
