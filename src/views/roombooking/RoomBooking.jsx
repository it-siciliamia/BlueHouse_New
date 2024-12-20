import React from "react";
import { useMediaQuery } from "react-responsive";
import Advantages from "./Advantages";
import HeaderIcons from "./HeaderIcons";
import ServicesRoom from "../../components/ServicesRoom/ServicesRoom";
import Support from "../../components/SuportComponent/support";
import SearchContainer from "./SearchContainer";
import "./index.css";

const RoomBooking = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 959.99 });
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });
  return (
    <div className="roomBooking">
      <div className="hero">
        {isDesktop && <HeaderIcons />}
        <SearchContainer />
      </div>
      <Advantages />
      <ServicesRoom />
      <Support />
    </div>
  );
};

export default RoomBooking;
