import { Box, makeStyles, Typography } from "@material-ui/core";
import "../../css/Services.css";
import React, { useContext, useState } from "react";
import clsx from "clsx";
import { Element } from "react-scroll";
import { UserContext } from "../../App";
import CustomModal from "../../components/customModal/CustomModal";
import { WithTransLate } from "../../translating/index";
import MyModal from "./Mymodal";
// import ViewGallery from "../viewGalery";
import './PhotoGallery.css'
import { Button } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: "flex",
    marginTop: "20px",
    justifyContent: "space-between",
    width: "83vw",
    [theme.breakpoints.down("md")]: {
      display: "none",
      width: "115vw",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
      width: "100%",
      marginTop: "40px",
      overflow: "auto",
      ...props.rootStyleInPhoneSize,
    },
  }),
  photoWrapper: (props) => ({
    position: "relative",
    width: props.unitWidth,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    backgroundSize: "cover",
    display: "flex",
    flexWrap: "wrap",
    fontFamily: "Josefin Sans",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
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
    [theme.breakpoints.down("xs")]: {
      width: "50vw",
      "& img": {
        height: "269px",
        width: "221px",
      },
    },
  }),

  imagesRoot: (props) => ({
    gap: "10px",
    display: "flex",
    justifyContent: "space-evenly",
    flexGrow: 1,
    marginLeft: "-60px",
    marginRight: "-20px",
    flexWrap: "wrap",

    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "0%",
      flexWrap: "nowrap",
      justifyContent: "space-evenly",
      marginLeft: "10%",
    },
  }),
  titleStyle: (props) => ({
    whiteSpace: "nowrap",
    transform: "rotate(-90deg)",
    height: "fit-content",
    fontFamily: "Oblik",
    width: "36px",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    marginLeft: "0px",
    // marginTop: props.customTitleStyle.marginTop,
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      // margin: `${props.customTitleStyle.marginTopXs} 15px 0`,
      margin: "53px -30px  0 20px",
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "50px",
    },
  }),
  category: {
    fontFamily: "Josefin Sans",
    fontSize: "22px",
    fontWeight: 300,
    paddingLeft: "5px",
    lineHeight: "50px",
    letterSpacing: "0em",
    marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      fontWeight: 400,
      marginLeft: "14px",
    },
  },
  actionStyle: {
    margin: " 50px  auto 0px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionOfGallaryStyle: {
    fontFamily: "Oblik",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "25px",
    letterSpacing: "0.1em",
    color: "#fff",
    width: "100%",
    height: "100%", // Make sure the container takes the full height of its parent
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align the items to the left
    justifyContent: "center", // Center the content vertically
    textAlign: "left",
    gap: "25px",
    paddingLeft: "20%",
     marginTop: "40%",
    [theme.breakpoints.down("md")]: {
      gap: "35px",
      fontSize: "14px",
      marginTop: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "40vw",
      gap: "25px",
      fontSize: "9px",
      marginTop: "30px",
      marginRight: "unset",
      textAlign: "left",
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
    justifyContent: "center",
    flexDirection: "column",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.25) 100%)",

    [theme.breakpoints.down("md")]: {
      "& div:first-child": {
        width: "100%",
        height: "calc(80% - 100px)",
      },
    },
    "@media(max-width:426px)": {
      width: "83%",
      maxHeight: "100%",
    },
    "& img": {
      width: "100%",
    },
  },
  mobile: {
    // display: "none",
  },
}));

export default function PhotoGallery({
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
  /**
   * backgroundImagesUrlAndTitles should be like this =
   * [
   * {
   * background:"url",
   * title:"title"
   * },
   * {
   * background:"url",
   * title:"title"
   * },
   * {
   * background:"url",
   * title:"title"
   * }
   * ]
   */
  // eslint-disable-next-line
  const [modalState, setModal, room, setRoom] = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0)
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


  const getDescriptions = (title) => {
    switch (title) {
      case "Rooms":
        return description[0];
      case "Houses":
        return description[1];
      case "Surroundings":
        return description[2];
      default:
        return [];
    }
  };

  const renderListItems = (title) => {
    const descriptions = getDescriptions(title);

    return descriptions.map((desc, index) => {
      // Avoid rendering unnecessary list items for "Houses" and "Surroundings"
      if ((title === "Houses" || title === "Surroundings") && index > 2) return null;

      return (
        <li key={index}>
          <WithTransLate
            text={desc.toString().split(",").join(" ").toUpperCase()}
          />
        </li>
      );
    });
  };


  return (
    <div id={id} onClick={() => openSliderOnClick && openSliderOnClick(true)}>
      <Element name={id}>
        <div className={root}>
          <h1 className={titleStyle}>
            <WithTransLate text={title} />
          </h1>

          <Box className={imagesRoot}>
            {backgroundImagesUrlAndTitles.map(
              ({ background, title }, index) => {
                return (
                  <div
                    key={index}
                    className={clickableParClassNames}
                    // Implement click function here ->
                    onClick={() => {
                      title === "Double/Twin"
                        ? setRoom({ double: true })
                        : title === "Triple / Quadruple"
                          ? setRoom({ triple: true })
                          : title === "Family Room"
                            ? setRoom({ family: true })
                            : title === "Apartments"
                              ? setRoom({ apartments: true })
                              : title === "Blue House"
                                ? setRoom({ blueHouse: true })
                                : title === "Green House"
                                  ? setRoom({ greenHouse: true })
                                  : title === "Grótta Northern Lights"
                                    ? setRoom({ gNorthernLights: true })
                                    : title === "Northern Lights"
                                      ? setRoom({ northernLights: true })
                                      : title === "Neighborhood"
                                        ? setRoom({ neighborhood: true })
                                        : title === "Activities"
                                          ? setRoom({ activities: true })
                                          : setRoom(false);
                    }}
                  >
                    {(description || action) && (
                      <div className={hoverPart}>
                        <ul className={descriptionOfGallaryStyle}>
                        {renderListItems(title)}
                        </ul>
                          <Button
                            variant="outlined"
                            sx={{
                              position:"absolute",
                              bottom:50,
                              color: "white",
                              width: "153px",
                              fontSize: "16px",
                              fontWeight: "600",
                              height: "38px",
                              border: "1px solid white",
                              borderRadius: "0px",
                              fontFamily: "Josefin Sans",
                              textAlign: "center", // Ensures the text is centered horizontally
                              "&:hover": {
                                backgroundColor: "#073762",
                                color: "white",
                                border: "1px solid #073762",
                              },
                            }}
                            onClick={() => {
                              setOpen(true);
                              setTabIndex(index);
                            }}
                          >
                            KNOW MORE
                          </Button>

                        <div className={actionStyle}>
                          </div>
                          <MyModal
                            index={tabIndex}
                            open={open}
                            setOpen={setOpen}
                            setTabIndex={setTabIndex}
                          />
                      </div>
                    )}
                    <img alt="ph" src={background} className={hoverImage} />
                    <Typography className={clsx(styling, category)}>
                      <WithTransLate text={title} />
                    </Typography>
                  </div>
                );
              }
            )}
          </Box>

        </div>


        {/* <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="10vh" // Adjust height as needed
    >
      <Button
        variant="outlined"
        className="centered-button"
        
        onClick={() => { 
          setOpen(true);
          setTabIndex(0); 
        }}
        sx={{
          borderColor: '#073762',
          color:"black",
          fontSize:"20px",
          borderRadius:"0px",
          '&:hover': {
            backgroundColor: '#073762',
            borderColor: '#073762',
            color: '#fff', // Optional: change text color on hover
          }
        }}
      >
        View Gallery
      </Button>
    </Box> */}
   
        {/*actionType && (
          <a href="/view-gallery" className={clsx("outLinedButton", but)}>
            <WithTransLate text={actionType} />
          </a>
        )*/}
        <div>
          <CustomModal />
        </div>
      </Element>
    </div>
  );
}
