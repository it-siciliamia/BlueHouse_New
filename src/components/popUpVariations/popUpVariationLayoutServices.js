import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import bleuHouseImage from "../../images/popUpVariations/bluehousepng.png";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  "@keyframes showup": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

  root: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    width: "100vw",
    height: "100vh",
    maxWidth: "1124px",
    maxHeight: "763px",
    top: "50%",
    left: "53.9%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    animation: "$showup 1s",
    background: "#EDF1F4",
    [theme.breakpoints.down("xs")]: {
      height: "100vh",
      left: "57%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "90vw",
      maxWidth: "1080px",
      justifyContent: "space-between",
      transform: "translate(-55%, -50%)",
    },
    [theme.breakpoints.down("md")]: {
      width: "90vw",
      maxWidth: "1280px",
      justifyContent: "space-between",
      transform: "translate(-58%, -50%)",
    },
  },

  titleStyle: {
    fontFamily: "Oblik",
    fontSize: "32px",
    lineHeight: "34px",
    letterSpacing: "0px",
    top: "rem",
    color: "#586D8D",
    [theme.breakpoints.down("xs")]: {
      top: "-2rem",
      fontFamily: "Oblik",
      fontSize: "24px",
      lineHeight: "30px",
      letterSpacing: "2px",
      width: "",
      marginTop: "8%",
    },
    [theme.breakpoints.up("xs")]: {
      marginBottom: "-5%",
    },
  },
  header: {
    display: "flex",
    width: "100%",
    padding: theme.spacing(2, 4, 3),
    marginTop: "100px",
    justifyContent: "flex-end",
  },
  exitButton: {
    width: 50,
    height: 50,
    background: "none",
    border: "none",
    position: "fixed",
    right: 0,
    top: 0,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      right: "20px",
      top: "20px",
    },
  },
  headerPosition: {
    display: "flex",
    flexDirection: "row",
    width: "56%",
    justifyContent: "space-between",
  },
  bodyContainer: {},
  btnContainer: {
    width: "140px",
    height: "26px",
    backgroundColor: "#04376F",
    display: "flex",
    padding: "12px 30px",
    alignItems: "center",
    color: theme.palette.primary.light,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    fontFamily: "Oblik",
    fontSize: "32px",
    lineHeight: "34px",
    letterSpacing: "0px",
  },
  iconStyle: {
    color: "white",
    width: "24px !important",
    height: "24px ",
    decorations: "none",
  },
  link: {
    color: theme.palette.warning.contrastText,
    display: "flex",
    gap: "12px",
    "& img": {
      width: "28px",
    },
  },
  originalSideImageStyle: {
    width: (props) => props.originalSideImageWidth,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: "4% 4% 4%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: "20px",
    minWidth: "562px",
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      marginTop: "auto",
      position: "fixed",
      zIndex: 1,
      padding: "10px 15px",
      top: "30%",
      left: "24px",
      right: "24px",
      bottom: "28px",
      height: "60%",
      backgroundColor: "white",
      minWidth: "unset",
    },
  },

  logoStyle: {
    display: "flex",
    width: "30vw",
    height: "5vh",
    marginLeft: "-2%",
    marginTop: "12%",
    marginBottom: "16%",

    [theme.breakpoints.down("xs")]: {
      width: "25vw",
      height: "20vh",
      marginLeft: "-4%",
      marginTop: "8%",
    },
  },
  bluredBackground: {
    display: "none",
    backgroundSize: "cover",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",

    "& .backgroundImage": {
      background: `url(${bleuHouseImage}) no-repeat center`,
      backgroundSize: "cover",
      height: "100%",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      [theme.breakpoints.down("xs")]: {
        backgroundSize: "contain",
      },
    },
    "& .backgroundColor": {
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      zIndex: 1,
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  replaceImageStyle: {
    display: "none",
    backgroundSize: "cover !important",
    position: "fixed",
    top: "24px",
    left: "24px",
    width: "calc(100% - 48px)",
    height: "57%",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
}));

export default function PopUpVariationMainLayout({
  handleClose,
  originalSideImageWidth,
  imageSrcReplace,
  title,
  imgSrc,
  popUpLargeContetn,
  popUpSmallContetn,
}) {
  const color = window.innerWidth < 600 ? "primary" : "secondary";

  const popUpContent =
    window.innerWidth >= 600 ? popUpLargeContetn : popUpSmallContetn;
  const {
    replaceImageStyle,
    bluredBackground,
    root,
    content,
    titleStyle,
    exitButton,
    originalSideImageStyle,
  } = useStyles({ originalSideImageWidth });

  return (
    <Box className={root}>
      <div className={bluredBackground}>
        <div className="backgroundColor" />
        <div className="backgroundImage" />
      </div>
      <div
        style={{
          background: `url(${imgSrc}) no-repeat `,
          backgroundSize: "cover",
        }}
        className={originalSideImageStyle}
      />
      <div
        style={{
          background: `url(${imageSrcReplace}) no-repeat`,
        }}
        className={replaceImageStyle}
      ></div>
      <Box className={content}>
        <button className={exitButton} type="button" onClick={handleClose}>
          <CloseIcon color={color} />
        </button>
        <Typography className={titleStyle}>
          <WithTransLate text={title} />
        </Typography>
        {popUpContent}
      </Box>
    </Box>
  );
}
