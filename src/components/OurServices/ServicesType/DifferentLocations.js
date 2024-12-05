import { makeStyles, Typography } from "@material-ui/core";
import PopUpVariationLayoutServices from "../../popUpVariations/popUpVariationLayoutServices";
import logo from "../../../images/stampLogo.png";
import originalSideImage from "../../../images/popUpVariations/CHEAPESTPRICE.png";
import replaceImage from "../../../images/popUpVariations/replace/CHEAPESTPRICE.svg";
import { WithTransLate } from "../../helpers/translating/index";

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
    "& li": {
      marginBottom: "20px",
    },
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
        <WithTransLate text="The Blue House, the Green House, and the Grótta Northern Lights Apartment and Rooms are located on our wonderful peninsula." />
      </Typography>
      <ul className={infoList}>
        <li>
          <WithTransLate text="Voted as one of the best locations for catching Northern Lights" />
        </li>
        <li>
          <WithTransLate text="Enjoy the beautiful scenery right from your window" />
        </li>
        <li>
          <WithTransLate text="Amazing view and amenities" />
        </li>
      </ul>
      <Typography className={intro}>
        <WithTransLate text="Feel free to contact us at " />
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
        <WithTransLate text="The Blue House, the Green House, and the Grótta Northern Lights Apartment and Rooms are located on our wonderful peninsula." />
      </Typography>
      <ul className={smallSizeFont}>
        <li>
          <WithTransLate text="Voted as one of the best locations for catching Northern Lights" />
        </li>
        <li>
          <WithTransLate text="Enjoy the beautiful scenery right from your window" />
        </li>
        <li>
          <WithTransLate text="Amazing view and amenities" />
        </li>
      </ul>
      <Typography className={outro}>
        <WithTransLate text="Feel free to contact us at " />
        <br />
        <br />
        <u>
          <b> info@bluehouse.is </b>
        </u>
        <br />
        <br />
      </Typography>
    </>
  );

  return (
    <PopUpVariationLayoutServices
      popUpLargeContetn={largContent}
      popUpSmallContetn={smallContent}
      title={"3 DIFFERENT lOCATIONS"}
      imageSrcReplace={replaceImage}
      imgSrc={originalSideImage}
      originalSideImageWidth={"73%"}
      handleClose={handleClose}
    />
  );
}
