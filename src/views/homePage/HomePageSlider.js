import React, { useEffect, useRef, useState } from "react";
import indexCircle from "../../images/index-circle.svg";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import Facebook from "../../images/Header_icons/headerSocialIcons/facebook.svg";
import Tripadvisor from "../../images/Header_icons/headerSocialIcons/tripadvisor_icon2.svg";
import instaIcon from "../../images/Header_icons/headerSocialIcons/insta.svg";
import houserules_mobile from "../../images/houserules_mobile.png";
import image2 from "../../images/instagram/insta1.jpg";
import image1 from "../../images/mobile_images/picture.jpeg";
import image3 from "../../images/mobile_images/grotta.jpg";
// import image4 from "../../images/instagram/insta1.jpg";
import Slide from "@mui/material/Slide";
import headerLogoMobileSize from "../../images/headerLogoMobileSize.svg";
import Email from "../../images/Header_icons/headerSocialIcons/email.svg";
import Whatsapp from "../../images/Header_icons/headerSocialIcons/whats.svg";
import clsx from "clsx";
import intro from "../../videos/intro.mp4";
import { WithTransLate } from "../../translating/index";
//#region slider images

import slide1 from "../../images/homePageSlider/slide1.jpg";
import slide2 from "../../images/homePageSlider/slide2.jpg";
import slide3 from "../../images/homePageSlider/slide3.jpg";
import slide4 from "../../images/homePageSlider/slide4.jpg";
import slide5 from "../../images/homePageSlider/slide5.jpg";
import slide6 from "../../images/homePageSlider/slide6.jpg";

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

//#endregion

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    width: "81vw",
    margin: "-55px auto 0",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  "@media only screen and (max-device-width: 1024px)": {
    root: {
      display: "none",
    },
  },
  sliderRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    width: "80vw",
    height: "590px",
    [theme.breakpoints.down("md")]: {
      width: "87vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  "@media(max-width:660px)": {
    root: {
      marginTop: "10vh",
      marginRight: "0px",
      width: "100vw",
    },
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    overflow: "hidden",
    scrollBehavior: "smooth",
    width: "75vw",
    height: "100%",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  gridListTile: {
    height: "100% !important",
    padding: "0 !important",
    width: "100%",
    backgroundSize: "cover",
    position: "relative",
    "@media(max-width:426px)": {
      display: "none",
    },
    "& video": {},
  },
  image: {
    width: "100%",
    height: "100%",
    display: "block",
    margin: "auto",
    objectFit: "contain",
    [theme.breakpoints.up("md")]: {
      width: "100vw",
    },
  },
  video: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "transparent",
    borderRadius: "50%",
    padding: "5px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    boxShadow: "none",
    zIndex: 1,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    "& svg": {
      color: "white",
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  buttonBack: {
    [theme.breakpoints.down("xl")]: {
      left: "12%",
    },
    [theme.breakpoints.down("lg")]: {
      left: "2%",
    },
  },

  buttonNext: {
    [theme.breakpoints.down("xl")]: {
      right: "12%",
    },
    [theme.breakpoints.down("lg")]: {
      right: "2%",
    },
  },
  buttonBackVideo: {
    [theme.breakpoints.down("xl")]: {
      left: "8%",
    },
    [theme.breakpoints.down("lg")]: {
      left: "2%",
    },
  },
  buttonNextVideo: {
    [theme.breakpoints.down("xl")]: {
      right: "8%",
    },
    [theme.breakpoints.down("lg")]: {
      right: "2%",
    },
  },
  indexCircle: {
    transform: "translate(-50%, -100%)",
    top: "100%",
    left: "50%",
    position: "sticky",
    display: "grid",
    gap: "10px",
  },
  indexCircleButton: {
    padding: "15px 5px",
    height: "fit-content",
    background: "none",
    zIndex: "3",
    border: "none",
  },
  socialIcons: {
    marginTop: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "45px 0 0 0",
    gap: "31px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  iconz: {
    width: "24px",
    height: "24px",
  },
  whats: {
    width: "24px",
    height: "24px",
  },
  trip: {
    width: "100%",
    height: "100%",
  },
  iconzImg: {
    width: "100%",
    height: "100%",
  },
  titleStyle: {
    fontFamily: "Oblik",
    transform: "rotate(-90deg)",
    whiteSpace: "nowrap",
    height: "fit-content",
    width: "fit-content",
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    margin: (props) => props.titleMargins,
    [theme.breakpoints.down("sm")]: {
      transform: "none",
      margin: "15px 0 -40px !important",
      width: "unset",
      height: "unset",
      textAlign: "center",
      padding: "0",
      marginBottom: "-35px",
      zIndex: 1,
    },
  },
  sliderReplacement: {
    width: "150vw",
    display: "none",
    backgroundSize: "cover",
    background: `url(${houserules_mobile})`,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& h1": {
      fontFamily: "Oblik",
      fontSize: "14px",
      fontWeight: "bold",
      textAlign: "center",
      color: "#fff",
      marginTop: "20px",
      marginBottom: "-15%",
    },
    "@media(max-width:767px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "41vh",
      marginTop: "-500px",
    },
  },
}));

const sliderData = [
  {
    img: slide1,
    title: "Image",
    author: "author",
  },
  {
    img: slide2,
    title: "Image",
    author: "author",
  },
  {
    img: slide3,
    title: "Image",
    author: "author",
  },
  // {
  //   img: slide4,
  //   title: "Image",
  //   author: "author",
  // },
  // {
  //   img: slide5,
  //   title: "Image",
  //   author: "author",
  // },
  // {
  //   img: slide6,
  //   title: "Image",
  //   author: "author",
  // },
];

function Slider({ classes, title }) {
  const ref = useRef(null);
  const screenWidth = window.innerWidth;
  const offset =
    screenWidth > 1024
      ? screenWidth * 0.75
      : screenWidth > 600
      ? screenWidth * 0.6
      : screenWidth - 20;
  const videoDuration = 43000,
    imageDuration = 2500;

  const [indexValue, setIndexValue] = useState(0);
  const [duration, setDuration] = useState(videoDuration);
  const imagesLength = sliderData.length + 1;
  const timeoutRef = React.useRef(null);
  const videoRef = React.useRef();

  try {
    ref.current.scrollLeft = indexValue * offset;
  } catch (error) {
    // console.log(error);
  }

  const scroll = (isBack) => {
    if (isBack) {
      setIndexValue((prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength);
    } else {
      setIndexValue((prevIndex) => (prevIndex + 1) % imagesLength);
    }
  };

  if (indexValue > imagesLength) {
    setIndexValue(indexValue === 0);
  } else if (indexValue < 0) {
    setIndexValue(imagesLength - 1);
  }
  if (videoDuration > 43000) {
    setDuration(videoRef === 0);
  }

  const getStyle = (index) =>
    index === indexValue
      ? {
          border: "5px solid #04376F",
          borderRadius: "50%",
          width: 0,
          backgroundColor: "#04376f",
        }
      : {};

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    resetTimeout();
    timeoutRef.current = setTimeout(async () => {
      if (imagesLength <= indexValue + 1) {
        const video = await videoRef.current;
        setIndexValue(0);
        setDuration(videoDuration);
        for (var i = 0; i < videoDuration; i++) {
          if (!video) return;
          video.currentTime = "0";
          video.play();
        }
      } else {
        setIndexValue(indexValue + 1);
        setDuration(imageDuration);
      }
    }, duration);

    return () => {
      resetTimeout();
    };
  }, [setIndexValue, indexValue, imagesLength, duration]);

  return (
    <div className={classes.sliderRoot}>
      <ImageList ref={ref} className={classes.gridList} cols={1}>
        <ImageListItem key={"video"} className={classes.gridListTile}>
          <button
            key={"back"}
            className={`${classes.button} ${classes.buttonBackVideo}`}
            onClick={() => scroll(true)}
          >
            <MdArrowBackIos />
          </button>
          <video
            style={{ height: "111%" }}
            loop
            className={classes.video}
            autoPlay
            muted
          >
            <source src={intro} type="video/mp4" />
          </video>
          <button
            key={"next"}
            className={`${classes.button} ${classes.buttonNextVideo}`}
            onClick={() => scroll(false)}
          >
            <MdArrowForwardIos />
          </button>
        </ImageListItem>
        {sliderData.map((tile, index) => (
          <ImageListItem key={index} className={classes.gridListTile}>
            <button
              key={"back"}
              className={`${classes.button} ${classes.buttonBack}`}
              onClick={() => scroll(true)}
            >
              <MdArrowBackIos />
            </button>
            <img className={classes.image} src={tile.img} alt={tile.title} />
            <button
              key={"next"}
              className={`${classes.button} ${classes.buttonNext}`}
              onClick={() => scroll(false)}
            >
              <MdArrowForwardIos />
            </button>
          </ImageListItem>
        ))}
      </ImageList>
      {!title && (
        <Box
          style={{
            gridTemplateColumns: `repeat(${sliderData.length + 1} ,1fr)`,
          }}
          className={classes.indexCircle}
        >
          <button
            key={0}
            className={clsx(classes.indexCircleButton, "clickable")}
            onClick={() => {
              setIndexValue(0);
              setDuration(videoDuration);
            }}
          >
            <img alt={"image " + 0} style={getStyle(0)} src={indexCircle} />
          </button>
          {sliderData.map((tile, index) => {
            const style = getStyle(index + 1);
            return (
              // <>
              <button
                key={index + 1}
                className={clsx(classes.indexCircleButton, "clickable")}
                onClick={() => {
                  setIndexValue(index + 1);
                  setDuration(2400);
                }}
              >
                <img
                  alt={"image " + index + 1}
                  style={style}
                  src={indexCircle}
                />
              </button>
              // </>
            );
          })}
        </Box>
      )}
      {/* <Button
        key={"next"}
        onClick={() => scroll(false)}
        className={classes.nextButton}
      >
        <img alt="next icon" className={classes.arrow} src={nextIcon} />
      </Button> */}
    </div>
  );
}

export default function Header({ title, titleMargins }) {
  // const divRef = React.useRef();
  const images = [image1, image2, image3]; // Array of image URLs
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const classes = useStyles({ titleMargins });
  return (
    <Box className={classes.root}>
      {title ? (
        <Typography className={classes.titleStyle}>
          <WithTransLate text={title} />
        </Typography>
      ) : (
        <Box className={classes.socialIcons}>
          <a
            href="https://www.instagram.com/bluehousebb/"
            target="_blank"
            rel="noreferrer"
            className={classes.iconz}
          >
            <img
              src={instaIcon}
              title="Instagram"
              alt="instagram"
              className={classes.iconzImg}
            />
          </a>
          <a
            href="https://www.facebook.com/bluehouseiceland"
            target="_blank"
            rel="noreferrer"
            className={classes.iconz}
          >
            <img
              src={Facebook}
              title="facebook"
              alt="facebook"
              className={classes.iconzImg}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
            target="_blank"
            rel="noreferrer"
            className={classes.whats}
          >
            <img
              src={Whatsapp}
              title="Whatsapp"
              alt="whatsapp"
              className={classes.iconzImg}
            />
          </a>
          {/* <a
            href="https://www.tripadvisor.com/Hotel_Review-g189970-d1915669-Reviews-Blue_House-Reykjavik_Capital_Region.html"
            target="_blank"
            rel="noreferrer"
            className={classes.iconz}
            >
            <img
              className={classes.trip}
              src={Tripadvisor}
              alt="trip-advisor"
              title="Tripadvisor"
            />
          </a> */}
          <a
            href="https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460"
            target="_blank"
            rel="noreferrer"
            className={classes.iconz}
            
          >
            <img src={Email} title="Email" alt="" className={classes.iconzImg}/>
          </a>
        </Box>
      )}
      <Box>
        <Slider title={title} classes={classes} />

        <Slide direction="up" in={true} timeout={1000}>
          <div
            className={classes.sliderReplacement}
            style={{ backgroundImage: `url(${images[index]})` }}
          >
            <img
              src={headerLogoMobileSize}
              alt="logo"
              className={classes.logo}
            />
            <Typography variant="h1" className={classes.slogan}>
              <WithTransLate text="COLOUR YOUR EXPERIENdsnlfkCE" />
            </Typography>
          </div>
        </Slide>
      </Box>
    </Box>
  );
}