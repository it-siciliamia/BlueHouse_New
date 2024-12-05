import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import Button from "../Shared/Button/Button";
import { UserContext } from "../../App";
// import RecommendationCustomModal from "../../components/customModal/recommendationCustomModal";
import { WithTransLate } from "../helpers/translating/index";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: "flex",
    marginTop: "20px",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "90vw",
    },
    "@media (max-width: 1023px)": {
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      allignItems: "center",
      marginTop: "0",
      ...props,
    },
  }),
  photoWrapper: (props) => ({
    position: "relative",
    marginBottom: "30px",
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
    "@media (max-width: 900px)": {
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
        minWidth: "260px",
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
      justifyContent: "center",
    },
  }),

  titleStyle: (props) => ({
    margin: "15rem 0 0 -15px",
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
      fontSize: "20px",
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
      marginTop: "5px",
      textAlign: "center",
      color: "#073762",
    },
  },

  actionStyle: {
    margin: " 50px  auto 0px auto",
    display: "flex",
    justifyContent: "center",
  },
  but: {
    display: "block",
    color: "#1D3967",
    width: "280px",
    height: "46px",

    "@media (max-width: 980px)": {
      marginTop: "5px",
      width: "240x",
      height: "48px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Josefin Sans",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
      color: "#1D3967",
    },
  },

  descriptionOfGallaryStyle: {
    fontFamily: "Oblik",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "25px",
    letterSpacing: "0.1em",
    color: "#fff",
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    [theme.breakpoints.down("xs")]: {
      width: "40vw",
      gap: "-100px",
      fontSize: "9px",
      marginTop: "30px",
    },
  },
  hoverPart: {
    position: "absolute",
    width: "100%",
    height: "calc(100% - 50px)",
    top: "0",
    right: "auto",
    marginBottom: "calc(50px - 100%)",
    gap: "30px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.25) 100%)",

    [theme.breakpoints.down("md")]: {
      "& div:first-child": {
        width: "100%",
        height: "calc(80% - 100px)",
      },
    },
    "@media (max-width: 768px)": {
      width: "100%",
      maxHeight: "100%",
    },
  },
  mobile: {
    display: "none",
  },
}));

export default function Recommendations({
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
  const isMobile = useMediaQuery({ maxDeviceWidth: 767 });
  const [setModal] = useContext(UserContext);
  const rootStyleInPhoneSize = removeInPhoneSize ? { display: "none" } : {};
  const {
    hoverPart,
    descriptionOfGallaryStyle,
    photoWrapper,
    imagesRoot,
    root,
    titleStyle,
    category,
    actionStyle,
    hoverImage,
  } = useStyles({ rootStyleInPhoneSize, ...props });

  const clickableParClassNames = isClickable
    ? clsx(photoWrapper, "clickable")
    : photoWrapper;

  return (
    <div
      id="RECOMMENDATIONS"
      style={{
        padding: isMobile ? "0px 20px 0" : "16px 15px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => openSliderOnClick && openSliderOnClick(true)}
    >
      <div style={{ width: "100%" }}>
        <div className={root}>
          <h2 className={titleStyle}>
            <WithTransLate
              text={title === "BLOG" ? "RECOMMENDATIONS" : title}
            />
          </h2>
          <Box className={imagesRoot}>
            {backgroundImagesUrlAndTitles.map(
              ({ background, title, objectPosition }, index) => {
                const lowerCaseTitle = title.toLowerCase();

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
                    <a
                      href={
                        lowerCaseTitle === "glacier caves"
                          ? "https://blog.bluehouse.is/?s=glacier+caves"
                          : lowerCaseTitle === "blue lagoon"
                          ? "https://blog.bluehouse.is/?s=blue+lagoon"
                          : "https://blog.bluehouse.is/?s=northen+lights"
                      }
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        alt="ph"
                        src={background}
                        className={hoverImage}
                        style={{
                          objectPosition: objectPosition,
                          height: isMobile ? "auto" : "auto",
                          width: isMobile ? "100%" : "auto",
                        }}
                      />
                    </a>
                    <Typography className={clsx(styling, category)}>
                      <WithTransLate text={title} />
                    </Typography>
                  </div>
                );
              }
            )}
          </Box>
        </div>
        {actionType && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://blog.bluehouse.is/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                text={actionType}
                btnClass="btnLight"
                width={isMobile ? "218px" : "280px"}
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
