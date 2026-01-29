import { useState } from "react";

import styles from "./FollowUs.module.scss";
import insta05 from "../../images/instagramSVG/insta05.webp";
import insta11 from "../../images/instagramSVG/insta11.webp";
import insta20 from "../../images/instagramSVG/insta20.webp";
import useBreakpoints from "../../Styles/useBreakpoints.js";
import Button from "../Shared/ui/Button.jsx";
import IconButton from "../Shared/ui/IconButton.jsx";
import Link from "../Shared/ui/Link.jsx";

const images = [
  { src: insta20, alt: "Instagram 1" },
  { src: insta05, alt: "Instagram 2" },
  { src: insta11, alt: "Instagram 3" },
];

const FollowUs = () => {
  const { isMobile } = useBreakpoints();
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const visibleImages = isMobile
    ? [images[index], images[(index + 1) % images.length]]
    : images;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Instagram</h2>
        <div className={styles.gridWrapper}>
          {!!isMobile && (
            <IconButton
              icon="chevronLeft"
              onClick={prev}
              className={`${styles.chevron} ${styles.left}`}
            />
          )}
          <div className={styles.grid}>
            {visibleImages.map((item, i) => (
              <div className={styles.card} key={`${item.alt}-${i}`}>
                <img src={item.src} alt={item.alt} className={styles.image} />
              </div>
            ))}
          </div>
          {!!isMobile && (
            <IconButton
              icon="chevronRight"
              onClick={next}
              className={`${styles.chevron} ${styles.right}`}
            />
          )}
          <div className={styles.followWrapper}>
            <Button
              as={Link}
              href="https://www.instagram.com/bluehousebb/"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className={styles.followButton}
            >
              Follow us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
