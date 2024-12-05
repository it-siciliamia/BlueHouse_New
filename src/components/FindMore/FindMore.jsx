import React from "react";
import tripAdvisor from "../../images/findMore/TripadvisorLogo.png";
import { WithTransLate } from "../helpers/translating/index";
import "./FindMore.scss";

const FindMore = () => {
  return (
    <div className="findMoreContainer">
      <h2>
        <WithTransLate text="FIND MORE ABOUT US" />
      </h2>
      <img src={tripAdvisor} alt="trip-advisor-logo" />
    </div>
  );
};

export default FindMore;
