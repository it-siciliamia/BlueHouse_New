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
      <a
        href="https://www.tripadvisor.com/Hotel_Review-g189970-d1915669-Reviews-Blue_House_B_B-Reykjavik_Capital_Region.html"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        <img src={tripAdvisor} alt="trip-advisor-logo" className="image" />
      </a>
    </div>
  );
};

export default FindMore;
