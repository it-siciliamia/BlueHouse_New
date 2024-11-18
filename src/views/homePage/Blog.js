import React from "react";
import "../../css/BlogPart.scss";
import island from "../../images/Blog/island.jpg";
import tripAdvisor from "../../images/findMore/TripadvisorLogo.png";
import { WithTransLate } from "../../translating";

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
        <h5>
          <WithTransLate text="Find more about us" />
        </h5>
        <img
          src={tripAdvisor}
          alt="trip-advisor-logo"
          onClick={handleTripAdvisorClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="blogPart__blog">
        <div className="blogPart__blog_image">
          <img src={island} alt="" />
        </div>
        <div className="blogPart__blog_content">
          <div className="blogPart__blog_content_text">
            <h3>
              <WithTransLate text="FOR USEFUL RECOMMENDATIONS & ADVENTURES READ AMAZING STORIES IN OUR BLOG" />
            </h3>
          </div>
          <button type="button" onClick={handleBlogButtonClick}>
            <WithTransLate text="Read Blog" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPart;
