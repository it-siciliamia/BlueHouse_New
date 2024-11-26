import { makeStyles, Typography } from "@material-ui/core";
import PopUpVariationLayoutServices from "./popUpVariationLayoutServices";
import logo from "../../images/stampLogo.png";
import originalSideImage from "../../images/popUpVariations/CHEAPESTPRICE.png";
import replaceImage from "../../images/popUpVariations/replace/CHEAPESTPRICE.svg";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  intro: {
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "25px",
    letterSpacing: "0px",
    fontFamily: "Josefin Sans",
  },
  infoList: {
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "25px",
    marginBottom: "-45px",
    textAlign: "left",
    fontFamily: "Josefin Sans",
    marginTop: "10px",
    "& ul": {
      padding: 0,
      marginTop: "-4px",
      marginBottom: "55px",
    },
  },
  stampLogo: {
    width: "100px",
    height: "100px",
    marginLeft: "22em",
    marginBottom: "5px",

    [theme.breakpoints.down("md")]: {
      width: "100px",
    },
  },
  smallSizeFont: {
    fontSize: "16px",
    fontWeight: 300,
    fontFamily: "Josefin Sans",
    lineHeight: "16px",
    letterSpacing: "0px",

    "& ul": {
      padding: "5px 15px 20px 15px",
      marginTop: "0px",
      marginBottom: "0px",
    },
    "& li":{
      marginBottom:"15px"
    }
  },
  outro: {
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "25px",
    letterSpacing: "0px",
    fontFamily: "Josefin Sans",
    marginTop: "-45px",
  },
}));

export default function CheapestPrice({ handleClose }) {
  const { intro, infoList, smallSizeFont, stampLogo, outro } = useStyles();

  const largContent = (
    <>
      <Typography className={intro}>
        <WithTransLate text="Here at the Blue House we want to" />
        <b>
          <WithTransLate text="give you the greatest flexibility." />
        </b>
        <WithTransLate text="That’s why we have a self-check-in system with a self-service breakfast." />
      </Typography>
      <ul className={infoList}>
        <li>
          <WithTransLate
            text=" Two days before your arrival, you will receive an email with the information you will need to    
   check in from 4 pm."
          />
        </li>
        <li>
          <WithTransLate text="We offer a full continental breakfast that includes our home-baked bread." />
        </li>
        <li>
          <WithTransLate text="You can enjoy our breakfast as early as you need until 10:30 am." />
        </li>
      </ul>
      <Typography className={intro}>
        <WithTransLate text="Feel free to contact us at" />
        <u>
          <b> info@bluehouse.is </b>
        </u>
      </Typography>
      <img src={logo} className={stampLogo} alt="logo" />
    </>
  );
  const smallContent = (
    <>
      <Typography className={smallSizeFont}>
        <WithTransLate text="At the Grótta Northern Lights Apartment and Rooms we want to" />
        <b>
          <WithTransLate text="give you the greatest flexibility." />
        </b>
        <WithTransLate text="That’s why we created our self-service check-in and breakfast at our partner location, the Blue House." />
      </Typography>
      <ul className={smallSizeFont}>
        <li>
          <WithTransLate text="Two days before your arrival, you will receive an email with all details which allows you to check-in from 4PM." />
        </li>
        <li>
          <WithTransLate text="You can enjoy our breakfast as early as you need until 10.30 am at our partner location, the Blue House only 150 meters on foot." />
        </li>
        <li>
          <WithTransLate text="We offer a full breakfast selection with our home-baked bread." />
        </li>
      </ul>
      <Typography className={outro}>
        <WithTransLate text="Feel free to contact us at " />
        <br/><br/>
        <u>
          <b> info@bluehouse.is </b>
        </u>
        <br/><br/>
      </Typography>
    </>
  );

  return (
    <PopUpVariationLayoutServices
      popUpLargeContetn={largContent}
      popUpSmallContetn={smallContent}
      title={"SELF CHECK-IN"}
      imageSrcReplace={replaceImage}
      imgSrc={originalSideImage}
      originalSideImageWidth={"165%"}
      handleClose={handleClose}
    />
  );
}
