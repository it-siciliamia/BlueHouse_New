import React from "react";
import { useMediaQuery } from "react-responsive";
import Advantages from "./Advantages";
import HeaderIcons from "./HeaderIcons";
import ServicesRoom from "../../components/ServicesRoom/ServicesRoom";
import ReviewRoomBooking from "../../components/ReviewRoomBooking/ReviewRoomBooking";
import Support from "../../components/SuportComponent/support";
import SearchContainer from "./SearchContainer";
import SearchContainerMobile from "./SearchContainerMobile";
import "./index.css";

const RoomBooking = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 959 });
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });

  const tripadvisorRating = {
    rating: 4.5,
    text: "Very good",
    reviews: 467,
  };

  const googleRatings = [
    { rating: 4.3, text: "Very good", reviews: 265 },
    { rating: 4.0, text: "Very good", reviews: 31 },
  ];
  return (
    <div className="roomBooking">
      {(isMobile || isTablet) && <SearchContainerMobile />}
      {(isDesktop || isLaptop) && (
        <div className="hero">
          <HeaderIcons />
          <SearchContainer />
        </div>
      )}
      {isDesktop && <Advantages />}
      <ServicesRoom />
      {(isDesktop || isLaptop) && (
        <ReviewRoomBooking
          tripadvisor={tripadvisorRating}
          googleRatings={googleRatings}
        />
      )}
      {isMobile && <Advantages />}
      <Support />
    </div>
  );
};

export default RoomBooking;
