import { makeStyles, Typography } from "@material-ui/core";
import PopUpVariationMainLayout from "./popUpVariationMainLayout";
import originalSideImage from "../../images/popUpVariations/BOOKONOURSITE.jpg";
import BHlogo from"../../images/popUpVariations/bluehouse.svg";
import replaceImage from "../../images/popUpVariations/replace/BOOKONOURSITE.svg";
import { WithTransLate } from "../../translating/index";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  intro: {
    marginTop: "-13%",
    marginBottom: "-15%",
    fontSize: "20px",
    fontWeight: 300,
    lineHeight: "25px",
    letterSpacing: "0px",
    fontFamily: "Josefin Sans",
  },

  infoList: {
    marginLeft: "3%",
    fontSize: "18px",
    fontWeight: 300,
    lineHeight: "25px",
    textAlign: "left",
    fontFamily: "Josefin Sans",

    "& ul": {
      padding: 0,
    },
  },

  smallSizeFont: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "15px",
    letterSpacing: "0px",
    textAlign: "center",
    "& ul": {
      marginTop: "10px",
      padding: 0,
      textAlign: "left",
    },
  },

  sliderSecondButton: {
    width: "9.44vw",
    minWidth: "130px",
    height: "6vh",
    fontFamily: "Josefin Sans",
    background: "none",
    border: "1px solid #14202B",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "0px",
    textAlign: "center",
    color: "#14202b",
    marginTop: "-13%",

    "@media (max-width: 600px)": {
      fontSize: "16px",
      lineHeight: "20px",
      width: "128px",
      height: "29px  ",
      borderRadius: "0",
    },

    // [theme.breakpoints.down("xs")]: {
    //   fontSize: "16px",
    //   lineHeight: "20px",
    //   width: "128px",
    //   height: "29px  ",
    //   borderRadius: "0",
    // },
    "&:hover": {
      background:
        "linear-gradient( 180deg, #04376f 99.99%,rgba(255, 255, 255, 0) 100%),   #ffffff",
      color: "#ffffff",
      borderColor: "#04376f !important",
    },
  },
}));

export default function BookOnOurWebsite({ handleClose }) {
  const { intro, infoList, smallSizeFont, ButtonPosition, sliderSecondButton } = useStyles();

  const largContent = (
    <>
      <Typography className={intro}>
        <WithTransLate text="Don't miss an adventure!" />
      </Typography>

      <Typography className={infoList}>
        <ul>
          <li>
            <WithTransLate
              text=" Best Price guaranteed"
            />
          </li>
          <li>
            <WithTransLate
              text=" Breakfast included (Continental/Cereal Depending on your booking)"
            />
          </li>
          <li>
            <WithTransLate
              text=" 45 minutes away from the new volcanic eruption"
            />
          </li>
        </ul>
      </Typography>
      <Grid marginTop="-15%" item>
        <div className={ButtonPosition}>
          <a  href="https://beds24.com/booking2.php?propid=3578&layout=1"
              target="_blank"
              rel="noreferrer">
            <button className={sliderSecondButton} type="button">
              <WithTransLate text="BOOK NOW" />
            </button>
          </a>
        </div>
      </Grid>
    </>
  );

  const smallContent = (
    <>
      <Typography className={smallSizeFont}>
        <WithTransLate
          text=" Don't miss an adventure!"
        />
      </Typography>
      <Typography className={smallSizeFont}>
        <ul>
          <li>
            <WithTransLate
              text=" Best Price guaranteed"
            />
          </li>
          <li>
            <WithTransLate
              text=" Breakfast included (Continental/Cereal Depending on your booking)"
            />
          </li>
          <li>
            <WithTransLate
              text=" 45 minutes away from the new volcanic eruption"
            />
          </li>
        </ul>
      </Typography>
    </>
  );

  return (
    <PopUpVariationMainLayout
      popUpLargeContent={largContent}
      popUpSmallContent={smallContent}
      Logo={BHlogo}
      title={"BOOK ON OUR WEBSITE AND YOU WILL RECEIVE"}
      imgSrc={originalSideImage}
      imageSrcReplace={replaceImage}
      originalSideImageWidth={"173%"}
      handleClose={handleClose}
    />
  );
}
