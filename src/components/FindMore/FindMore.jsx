import React from "react";
import tripAdvisor from "../../images/findMore/TripadvisorLogo.png";
import "./FindMore.scss";
const FindMore = () => {
  return (
    <div className="findMoreContainer">
      <h2>Find more about us</h2>
      <img src={tripAdvisor} alt="trip-advisor-logo" />
    </div>
  );
};

export default FindMore;
