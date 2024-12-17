import React from "react";
import Button from "../Shared/Button/Button";
import island from "../../images/Blog/island.webp";
import tripAdvisor from "../../images/findMore/TripadvisorLogo.png";
import { WithTransLate } from "../helpers/translating";
import "./BlogPart.scss";

function BlogPart() {
  const handleBlogButtonClick = () => {
    window.open("https://blog.bluehouse.is", "_blank");
  };

  const handleTripAdvisorClick = () => {
    window.open(
      "https://www.tripadvisor.com/Hotel_Review-g189970-d1915669-Reviews-Blue_House_B_B-Reykjavik_Capital_Region.html",
      "_blank"
    );
  };

  return (
    <div className="blogPart">
      <div className="tripAdvisor_container">
        <h3
          style={{ whiteSpace: "nowrap", fontSize: "18px", fontWeight: "300" }}
        >
          <WithTransLate text="FIND MORE ABOUT US" />
        </h3>
        <img
          src={tripAdvisor}
          alt="trip-advisor-logo"
          onClick={handleTripAdvisorClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="blogPart__blog">
        <div className="blogPart__blog_image">
          <img src={island} alt="Island" />
        </div>
        <div className="blogPart__blog_content">
          <div className="blogPart__blog_content_text">
            <h3>
              <WithTransLate text="FOR USEFUL RECOMMENDATIONS & ADVENTURES READ AMAZING STORIES IN OUR BLOG" />
            </h3>
          </div>
          <Button
            text="READ BLOG"
            btnClass="btnLightWithOut"
            handleClick={handleBlogButtonClick}
            width="218px"
          />
        </div>
      </div>
    </div>
  );
}

export default BlogPart;
