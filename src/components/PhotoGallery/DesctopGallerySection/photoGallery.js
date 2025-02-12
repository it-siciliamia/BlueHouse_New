import React, { useContext, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { Element } from "react-scroll";
import { UserContext } from "../../../App";
import CustomModal from "../../Shared/CustomModal/CustomModal";
import { WithTransLate } from "../../helpers/translating/index";
import MyModal from "./Mymodal";
import "./PhotoGallery.css";
import Button from "../../Shared/Button/Button";
const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: "flex",
    
    width:"95%",
    paddingLeft:"3%",
    [theme.breakpoints.down("md")]: {
      flexDirection:"column"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
      marginTop: "40px",
      overflow: "auto",
      ...props.rootStyleInPhoneSize,
    },
  }),
  photoWrapper: (props) => ({
    position: "relative",
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    backgroundSize: "cover",
    display: "flex",
    fontFamily: "Josefin Sans",
    flexDirection: "column", 
    
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
    display: "flex",
    justifyContent:"space-between",
    width:"100%",
    height:"auto",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      width:"100%", 
      justifyContent: "space-between",
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
    color:"#1D3967",
    height: "fit-content",
    fontFamily: "Oblik",
    width: "36px",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    marginLeft: "0px",
    marginTop: "5rem",
    marginRight:"1%",
    transform: "rotate(-90deg)",
    [theme.breakpoints.down("md")]: {
      transform:"none"
      },
    [theme.breakpoints.down("xs")]: {
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
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
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
  // eslint-disable-next-line
  const [modalState, setModal, room, setRoom] = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
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
      if ((title === "Houses" || title === "Surroundings") && index > 2)
        return null;

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
      <Element name={id} >
        <div className={root}>
          <h2 className={titleStyle}>
            <WithTransLate text={title} />
          </h2>

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

                        <div style={{ position: "absolute", bottom: 50 }}>
                          <Button
                            type="button"
                            text="Know More"
                            width="180px"
                            btnClass="inBox"
                            handleClick={() => {
                              setOpen(true);
                              setTabIndex(index);
                            }}
                          />
                        </div>

                        <div className={actionStyle}></div>
                        <MyModal
                          index={tabIndex}
                          open={open}
                          setOpen={setOpen}
                          setTabIndex={setTabIndex}
                        />
                      </div>
                    )}
                    <img alt="ph" src={background} className={hoverImage} />
                    <Typography className={clsx(styling, category)} style={{color:"#1D3967"}}>
                      <WithTransLate text={title} />
                    </Typography>
                  </div>
                );
              }
            )}
            
              
          </Box>
          
        </div>
        <div style={{display:"flex",justifyContent:"center", width:"100%"}}>
              <Button
                text="VIEW GALLERY"
                btnClass="btnLightWithOut"
                handleClick={() =>
                  window.open("https://www.instagram.com/bluehousebb/", "_blank")
                }
              />
            </div>
        <div>
          <CustomModal />
        </div>
      </Element>
    </div>
  );
}
