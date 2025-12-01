import HomeHeader from "./HomeHeader.jsx";
import s from "./HomePage.module.scss";
import BlogPart from "../../components/BlogComponent/Blog.jsx";
import FollowUs from "../../components/FollowUs/FollowUs.jsx";
import Newsletter from "../../components/Newsletter/Newsletter.jsx";
import OurServices from "../../components/OurServices/OurServices.jsx";
import PhotoGallery from "../../components/PhotoGallery/DesctopGallerySection/photoGallery.jsx";
import Recommendations from "../../components/Recommendations/Recommendations.jsx";
import ReviewSection from "../../components/ReviewSlider/ReviewSection.jsx";
import SaveUpTo10 from "../../components/SaveUpTo10/SaveUpTo10.jsx";
import Support from "../../components/SuportComponent/support.jsx";
import housesImage from "../../images/gallery/houseBB2.svg";
import roomsImage from "../../images/gallery/rooms.svg";
import surroundingsImage from "../../images/gallery/surroundings.svg";

const GALLERY_BACKGROUND_IMAGES_AND_TITLES = [
  { background: roomsImage, title: "Rooms" },
  { background: housesImage, title: "Houses" },
  { background: surroundingsImage, title: "Surroundings" },
];

export default function HomePage() {
  const descrip1 = [
    ["DOUBLE / TWIN", "TRIPLE / QUADRUPLE", "FAMILY ROOM", "APARTMENTS"],
    ["Blue House", "Green House", "Grótta Northern Lights"],
    ["Northern Lights", "Neighborhood", "Activities"],
  ];

  return (
    <div className={s.home} style={{ color: "#1D3967" }}>
      <HomeHeader />
      <OurServices />

      {/* Accommodation Options (ex-Gallery) */}
      <PhotoGallery
        id="ACCOMMODATION_OPTIONS"
        actionType="VIEW GALLERY"
        description={descrip1}
        title="ACCOMMODATION OPTIONS"
        backgroundImagesUrlAndTitles={GALLERY_BACKGROUND_IMAGES_AND_TITLES}
        unitWidth={"21vw"}
        maxWidth={"100vw"}
        minWidth={"220px"}
      />

      <SaveUpTo10 />
      <BlogPart />
      <Recommendations />
      <ReviewSection />
      <FollowUs />
      <Support />
      <Newsletter />
    </div>
  );
}
