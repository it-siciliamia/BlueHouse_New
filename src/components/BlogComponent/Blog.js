import React from "react";
import Link from "../Shared/ui/Link";
import useBreakpoints from "../../Styles/useBreakpoints";
import blogHero from "../../images/Blog/BlogSection.png";
import { WithTransLate } from "../helpers/translating";

import s from "./BlogPart.module.scss";

function BlogPart() {
  const { isDesktop } = useBreakpoints();

  return (
    <section
      className={s.section}
      aria-labelledby="blog-title"
      data-bp={isDesktop ? "desktop" : "other"}
    >
      <div className={s.frame}>
        <div
          className={s.hero}
          style={{ backgroundImage: `url(${blogHero})` }}
          role="img"
          aria-label="Aurora over Icelandic landscape"
        >
          <div className={s.content}>
            <div className={s.textBlock}>
              <h1 id="blog-title" className={s.title}>
                <WithTransLate text="EXCITED ABOUT YOUR TRIP BUT YOU DON’T KNOW WHERE TO BEGIN?" />
              </h1>
              <p className={s.paragraph}>
                <WithTransLate text="No problem! Our blog is your ultimate guide, packed with tips about iconic attractions as well as some hidden gems in Reykjavik." />
              </p>
            </div>

            <div className={s.buttonWrap}>
              <Link
                variant="secondary"
                href="https://bluehouse.is/blog"
                rel="noopener"
                className={s.cta}
              >
                READ BLOG
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPart;
