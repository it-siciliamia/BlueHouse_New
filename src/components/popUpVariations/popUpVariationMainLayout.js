import React from "react";
import { Box,Grid, makeStyles, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
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

    [theme.breakpoints.up("sm")]: {
      width: "80vw",
      maxWidth: "1080px",
    },

    [theme.breakpoints.down("md")]: {
      width: "85vw",
      maxWidth: "1280px",
      left: "50%",
    },

    '@media (max-width: 810px)' : {
      width: "100vw",
      height: "100vh",
      maxWidth: "100%",
      maxHeight: "763px",
      top: "52%",
    },

    "@media (max-width: 600px)": {
      height: "fit-content",
      flexDirection: "column",
      background: "transparent",
    },
  },

  logoClass: {
    display: "flex",
    width: "30vw",
    height:"15vh", 
    marginLeft:"-2%", 
    marginTop:"-16%",
    marginBottom:"26%",
  },

  titleStyle: {
    marginTop: "-30%",
    fontFamily: "Oblik",
    fontSize: "32px",
    lineHeight: "34px",
    letterSpacing: "0px",
    top:"-10rem",

    "@media (max-width: 900px)": {
      marginTop: "-20%",
    },

    "@media (max-width: 744px)": {
      fontSize: "28px",
    },

    "@media (max-width: 600px)": {
      marginTop: "15%",
      fontSize: "17px",
      lineHeight: "20px",
      textAlign: "center",
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
    width: "50%",
    "& img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },

    "@media (max-width: 600px)": {
      display: "none",
    },
  },

  content: {
    padding: "4% 4%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: "20px",
    width: "50%",
    position:'relative',
    "@media (max-width: 600px)": {
      padding: "20px 25px",
      width: "calc(100% - 48px)",
      marginLeft: "24px",
      zIndex: 1,
      background: "#EDF1F4",
    },
  },

  BHlogoStyle: {
    position: "absolute",
    top:50,
    left:60,
    display: "flex",
    minWidth: "90px",
    width: "20%",
    height:"10vh", 
    marginBottom: "5%",
    marginLeft:"-6%",
    marginTop: "-12%",

    "@media (max-width: 1100px)": {
      marginTop: "-10%",
    },

    "@media (max-width: 900px)": {
      marginTop: "-8%",
    },

    "@media (max-width: 600px)": {
      width: "25vw", 
      height:"20vh",
      marginLeft: "-2%",
      marginTop: "-5%",
    },
  },

  replaceImageStyle: {
    display: "none",
    position: "relative",
    zIndex: 1,
    top: "24px",
    left: "24px",
    width: "calc(100% - 48px)",
    height: "57%",

    "& img": {
      width: "100%",
      objectFit: "cover",
    },

    "@media (max-width: 600px)": {
      display: "block",
    },
  },
}));

export default function PopUpVariationMainLayout({
  handleClose,
  originalSideImageWidth,
  imageSrcReplace,
  Logo,
  title,
  imgSrc,
  popUpLargeContent,
  popUpSmallContent,
}) {
  const color = window.innerWidth <= 600 ? "primary" : "secondary";

  const popUpContent = window.innerWidth > 600
    ? popUpLargeContent
    : popUpSmallContent;

  const {
    replaceImageStyle,
    bluredBackground,
    root,
    content,
    BHlogoStyle,
    titleStyle,
    exitButton,
    originalSideImageStyle,
  } = useStyles({ originalSideImageWidth });

  return (
    <Box className={root}>
      <div className={bluredBackground}>
      </div>

      <div className={originalSideImageStyle}>
        <img src={imgSrc} alt="" />
      </div>

      <div className={replaceImageStyle}>
        <img src={imageSrcReplace} alt="" />
      </div>

      <Box className={content}>
        <button className={exitButton} type="button" onClick={handleClose}>
          <CloseIcon color={color} />
        </button>

        <Grid item>
          <img src={Logo} className={BHlogoStyle} alt="logo" />
        </Grid>

        <Typography className={titleStyle}>
          <WithTransLate text={title} />
        </Typography>
        
        {popUpContent}
      </Box>
    </Box>
  );
}
