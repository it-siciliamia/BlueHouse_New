import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Advantages from "./Advantages.jsx";
import HeaderIcons from "./HeaderIcons.jsx";
import SearchContainer from "./SearchContainer.jsx";
import SearchContainerMobile from "./SearchContainerMobile.jsx";
import ReviewBooking from "../../components/ReviewRoomBooking/ReviewBooking.jsx";
import ServicesRoom from "../../components/ServicesRoom/ServicesRoom.jsx";
import Support from "../../components/SuportComponent/support.jsx";
import { getRoomsData } from "../../redux/technitial/technical-operations.js";
import useBreakpoints from "../../Styles/useBreakpoints.js";
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
  const { isMobile, isTablet, isSmallScreen, isDesktop } = useBreakpoints();

  useEffect(() => {
    dispatch(getRoomsData());
  }, [dispatch]);

  return (
    <div className="roomBooking">
      {!!(isMobile || isTablet) && <SearchContainerMobile />}
      {!!(isDesktop || isSmallScreen) && (
        <div className="hero">
          <HeaderIcons />
          <SearchContainer />
        </div>
      )}
      {!!isDesktop && <Advantages />}
      <ServicesRoom />
      <ReviewBooking tripadvisor={tripadvisorRating} googleRatings={googleRatings} />
      {!!isMobile && <Advantages />}
      <Support />
    </div>
  );
};

export default RoomBooking;
