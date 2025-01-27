import React from "react";
import Advantages from "./Advantages";
import HeaderIcons from "./HeaderIcons";
import ServicesRoom from "./ServicesRoom/ServicesRoom";
import Support from "../../components/SuportComponent/support";
import "./index.css";
import "./calendar.css";
import SearchContainer from "./SearchContainer";

const RoomBooking = () => {
  return (
    <main className="main" style={{ width: "100%", paddingRight: "60px" }}>
      <section className="hero">
        <HeaderIcons />
        <SearchContainer />
      </section>
      <Advantages />
      <ServicesRoom />
      <Support />
    </main>
  );
};

export default RoomBooking;
