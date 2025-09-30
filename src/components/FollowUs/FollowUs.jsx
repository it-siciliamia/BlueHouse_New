import React from "react";
import styles from "./FollowUs.module.scss";
import Link from "../Shared/ui/Link";

// images in required order: 20, 5, 11
import insta05 from "../../images/instagramSVG/insta05.webp";
import insta11 from "../../images/instagramSVG/insta11.webp";
import insta20 from "../../images/instagramSVG/insta20.webp";

const FollowUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* vertical title on the left */}
        <h2 className={styles.title}>Instagram</h2>

        {/* fixed 3-image grid */}
        <div className={styles.grid}>
          {/* 1st card */}
          <div className={styles.card}>
            <img src={insta20} alt="Instagram 1" className={styles.image} />
            <div className={styles.bottom} />
          </div>

          {/* 2nd card with button in the bottom block */}
          <div className={styles.card}>
            <img src={insta05} alt="Instagram 2" className={styles.image} />
            <div className={styles.bottom}>
              <Link
                href="https://www.instagram.com/bluehousebb/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                FOLLOW US
              </Link>
            </div>
          </div>

          {/* 3rd card */}
          <div className={styles.card}>
            <img src={insta11} alt="Instagram 3" className={styles.image} />
            <div className={styles.bottom} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
