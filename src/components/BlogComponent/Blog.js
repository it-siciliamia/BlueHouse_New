import React from "react";
import Button from "../Shared/Button/Button";
import useBreakpoints from "../../Styles/useBreakpoints";
import island from "../../images/Blog/island.webp";
import tripAdvisor from "../../images/findMore/TripadvisorLogo.png";
import { WithTransLate } from "../helpers/translating";

import s from "./BlogPart.module.scss";

function BlogPart() {
  const { isMobile, isTablet, isLaptop, isDesktop } = useBreakpoints();
  console.log(
    "isMobile:",
    isMobile,
    "isTablet:",
    isTablet,
    "isLaptop",
    isLaptop,
    "isDesktop",
    isDesktop
  );
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
    <div className={s.blogPart}>
      <div className={s.container}>
        <h3 className={s.title}>
          <WithTransLate text="FIND MORE ABOUT US" />
        </h3>
        <img
          src={tripAdvisor}
          alt="trip-advisor-logo"
          onClick={handleTripAdvisorClick}
        />
      </div>
      <div className={s.blog}>
        <div className={s.blogImage}>
          <img src={island} alt="Island" />
        </div>
        <div className={s.blog_content}>
          <div className={s.blog_content_text}>
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
