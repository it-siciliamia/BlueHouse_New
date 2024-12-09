import React from "react";
import Advantages from "./Advantages";
import HeaderIcons from "./HeaderIcons";
import ServicesRoom from "./ServicesRoom/ServicesRoom";
import "./index.css";
import "./calendar.css";
import SearchContainer from "./SearchContainer";

const RoomBooking = () => {
  return (
    <main className="main" style={{ width: "100%" }}>
      <section className="hero">
        <HeaderIcons />
        <SearchContainer />
      </section>
      <Advantages />
      <ServicesRoom />
    </main>
  );
};

export default RoomBooking;
