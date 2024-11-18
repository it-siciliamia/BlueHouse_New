import { Box, makeStyles} from "@material-ui/core";
import React, { useContext } from "react";
import clsx from "clsx";
import { UserContext } from "../../App";
import { WithTransLate } from "../../translating/index";
// import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: "flex",
    marginTop: "20px",
    justifyContent: "space-between",
    width: "79vw",
    [theme.breakpoints.down("md")]: {
      width: "90vw",
    },
    "@media (max-width: 1023px)": {
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      display: "none",
      justifyContent: "center",
      allignItems: "center",
      marginTop: "0",

      ...props,
    },
  }),
  photoWrapper: (props) => ({
    position: "relative",
    marginLeft: "65px",
    marginBottom: "50px", //added this for the deployed version
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    backgroundSize: "cover",
    display: "flex",
    flexWrap: "no-wrap",
    fontFamily: "Josefin Sans",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    height: "fit-content",
    "& div": {
      visibility: "hidden",
    },
    "&:hover": {
      "& div": {
        visibility: "visible",
      },
    },
    "& img": {
      width: "100%",
    },
    "@media (max-width: 1256px)": {
      marginLeft: "0",
    },
    "@media (max-width: 1024px)": {
      marginLeft: "0",
    },
    "@media (max-width: 900px)": {
      marginLeft: "0",
      paddingBottom: "24px",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      width: "450px ",
      maxWidth: "100%",
      "& img": {
        objectFit: "cover",
        height: "269px",
        maxWidth: "100%",
        width: "350px",
      },
      "& p": {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },

    "@media (max-width: 768px)": {
      width: "100%",
      "& a": {
        width: "100%",
      },
      "& img": {
        height: "280px",
        minWidth: "290px",
        maxWidth: "100%",
        width: "100%",
      },
      "& p": {
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "26px",
        color: "#073762",
      },
    },

    "@media (max-width: 640px)": {
      "& a": {
        width: "98%",
      },
      "& img": {
        height: "185px",
      },
    },
  }),

  imagesRoot: (props) => ({
    paddingInline: "25px",
    gap: "10px",
    display: "flex",
    justifyContent: "space-evenly",
    flexGrow: 1,
    flexWrap: "nowrap",

    "@media (max-width: 1023px)": {
      padding: "20px 0 0",
      maxWidth: "100%",
    },

    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "7%",
      alignItems: "center",
      marginTop: "5px",
      justifyContent: "center",
    },
  }),

  titleStyle: (props) => ({
    margin: "8rem 0 0 -15px",
    whiteSpace: "nowrap",
    transform: "rotate(-90deg)",
    height: "fit-content",
    fontFamily: "Oblik",
    width: "36px",

    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.1em",

    "@media (max-width: 1023px)": {
      margin: 0,
      transform: "rotate(0deg)",
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "50px",
    },
  }),

  category: {
    fontFamily: "Josefin Sans",
    fontSize: "22px",
    fontWeight: 300,
    lineHeight: "50px",
    letterSpacing: "0em",
    marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },

  actionStyle: {
    margin: " 50px  auto 0px auto",
    display: "flex",
    justifyContent: "center",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "79vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
  but: {
    display: "block",
    color:'#1D3967', 
    width:'280px',
    height:'46px',

    "@media (max-width: 980px)": {
      marginTop: "20px",
      width: "165px",
      height: "49px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Josefin Sans",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
    },
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
}));

export default function FollowUs({
  id,
  backgroundImagesUrlAndTitles,
  action,
  styling,
  description,
  title,
  actionType,
  removeInPhoneSize,
  openSliderOnClick,
  openSliderOnClickKnowMore,
  isClickable,
  ...props
}) {
  const [setModal] = useContext(UserContext);
  const rootStyleInPhoneSize = removeInPhoneSize ? { display: "none" } : {};
  const {
    hoverPart,
    descriptionOfGallaryStyle,
    photoWrapper,
    imagesRoot,
    root,
    titleStyle,
  
    actionStyle,
    but,
    hoverImage,
  } = useStyles({ rootStyleInPhoneSize, ...props });

  const clickableParClassNames = isClickable
    ? clsx(photoWrapper, "clickable")
    : photoWrapper;

  return (
    <div
      style={{
        padding: "16px 15px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id={id}
      onClick={() => openSliderOnClick && openSliderOnClick(true)}
    >
      <div style={{ width: "100%" }}>
        <div className={root}>
          <h1 className={titleStyle}>
            <WithTransLate text={title} />
          </h1>
          <Box className={imagesRoot}>
            {backgroundImagesUrlAndTitles.map(
              ({ background, objectPosition }, index) => {
                return (
                  <div key={index} className={clickableParClassNames}>
                    {(description || action) && (
                      <div className={hoverPart}>
                        <ul className={descriptionOfGallaryStyle}></ul>
                        <div
                          className={actionStyle}
                          onClick={() => {
                            setModal({
                              state: true,
                              index: 2,
                            });
                          }}
                        >
                          {action}
                        </div>
                      </div>
                    )}
                    <a href={"https://www.instagram.com/bluehousebb/"} rel="noreferrer"  target="_blank">
                      <img
                        alt="ph"
                        src={background}
                        className={hoverImage}
                        style={{ objectPosition: objectPosition }}
                      />
                    </a>
                  </div>
                );
              }
            )}
          </Box>
        </div>
        <div>
          {actionType && (
            <a
              href="https://www.instagram.com/bluehousebb/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx("outLinedButton", but)}
            >
              <WithTransLate text={actionType} />
            </a>
          )}
          {/* <div>
            <MdArrowBackIos />
            <MdArrowForwardIos />
          </div> */}
        </div>
      </div>
    </div>
  );
}
