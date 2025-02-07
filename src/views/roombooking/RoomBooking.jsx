import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useBreakpoints from "../../Styles/useBreakpoints";
import Advantages from "./Advantages";
import HeaderIcons from "./HeaderIcons";
import ServicesRoom from "../../components/ServicesRoom/ServicesRoom";
import ReviewRoomBooking from "../../components/ReviewRoomBooking/ReviewRoomBooking";
import Support from "../../components/SuportComponent/support";
import SearchContainer from "./SearchContainer";
import SearchContainerMobile from "./SearchContainerMobile";
import { getRoomsData } from "../../redux/technitial/technical-operations";
import "./index.css";

export const googleRatings = [
  { rating: 4.3, text: "Very good", reviews: 265 },
  { rating: 4.0, text: "Very good", reviews: 31 },
];

export const tripadvisorRating = {
  rating: 4.5,
  text: "Very good",
  reviews: 467,
};

const RoomBooking = () => {
  const dispatch = useDispatch();
  const { isMobile, isTablet, isLaptop, isDesktop } = useBreakpoints();

  useEffect(() => {
    dispatch(getRoomsData());
  }, [dispatch]);

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
