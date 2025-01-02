import React from "react";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core";
import HomeHeader from "./HomeHeader.jsx";
import PhotoGallery from "../../components/PhotoGallery/DesctopGallerySection/photoGallery.js";
import OurServices from "../../components/OurServices/OurServices.jsx";
import BookingWrapper from "../../components/BookingWrapper/BookingWrapper.jsx";
import roomsImage from "../../images/gallery/rooms.svg";
import housesImage from "../../images/gallery/houseBB2.svg";
import surroundingsImage from "../../images/gallery/surroundings.svg";
import Galary from "../../components/PhotoGallery/MobileGallerySection/Galary.js";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider.js";
import Support from "../../components/SuportComponent/support.js";
import Recommendations from "../../components/Recommendations/Recommendations.jsx";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";
import BlogPart from "../../components/BlogComponent/Blog.js";
import FollowUs from "../../components/FollowUs/FollowUs.jsx";
import NewsLetter from "../../components/NewsLetter/NewsLetter.jsx";
import FindMore from "../../components/FindMore/FindMore.jsx";

import s from "./HomePage.module.scss";

const useStyles = makeStyles((theme) => ({
  galleryButton: {
    width: "150px",
    height: "40px",
    background: "transparent",
    fontSize: "14px",
    lineHeight: "20px",
    border: "1px solid #073865",
    borderColor: "#fff",
    borderRadius: "0px",
    cursor: "pointer",
    color: "#fff",
    "&:hover": {
      background:
        "linear-gradient( 180deg,#04376f 99.99%,rgba(255, 255, 255, 0) 100%), #ffffff",
      color: "#ffffff",
      borderColor: "#04376f !important",
    },
    [theme.breakpoints.down("md")]: {
      width: "150px",
      height: "25px",
      fontSize: "14px",
      marginTop: "-65px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100px",
      height: "25px",
      fontSize: "10px",
      marginTop: "-65px",
    },
  },
  recommendationButton: {
    position: "absolute",
    width: "20.963541666666668vw",
    height: "65vh",
    background: "transparent",
    marginTop: "-47vh",
    border: "0px solid rgba(255,255,255,.5)",
    cursor: "pointer",
    color:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.25) 100%)",
    [theme.breakpoints.down("xs")]: {
      width: "49vw",
      height: "54vh",
      marginTop: "-47vh",
    },
  },
}));

const GALLERY_BACKGROUND_IMAGES_AND_TITLES = [
  {
    background: roomsImage,
    title: "Rooms",
  },
  {
    background: housesImage,
    title: "Houses",
  },
  {
    background: surroundingsImage,
    title: "Surroundings",
  },
];

export default function HomePage() {
  const { root, galleryButton } = useStyles();
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1279.99 });

  const customGALLERYTitleStyle = {
    marginTop: "95px",
    marginTopXs: "52px",
  };

  const descrip1 = [
    ["DOUBLE / TWIN", "TRIPLE / QUADRUPLE", "FAMILY ROOM", "APARTMENTS"],
    ["Blue House", "Green House", "Grótta Northern Lights"],
    ["Northern Lights", "Neighborhood", "Activities"],
  ];

  return (
    <div className={s.home}>
      <HomeHeader />
      <BookingWrapper />
      <OurServices />
      {(isMobile || isTablet) && <Galary />}
      <PhotoGallery
        id="GALLERY_DESCTOP"
        actionType="VIEW GALLERY"
        action={<button className={galleryButton}>DISCOVER MORE</button>}
        description={descrip1}
        title="GALLERY"
        backgroundImagesUrlAndTitles={GALLERY_BACKGROUND_IMAGES_AND_TITLES}
        customTitleStyle={customGALLERYTitleStyle}
        unitWidth={"21vw"}
        maxWidth={"514px"}
        minWidth={"220px"}
      />
      <AboutUs />
      <ReviewSlider />
      <Recommendations />
      <BlogPart />
      <FollowUs />
      <FindMore />
      <Support />
      <NewsLetter />
    </div>
  );
}
