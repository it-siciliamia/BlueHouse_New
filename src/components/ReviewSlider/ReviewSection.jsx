import { WithTransLate } from "../helpers/translating/index";
import tripAdvisor from "../../images/findMore/TripadvisorLogo.png";

import s from "./ReviewSection.module.scss";
import ReviewCard from "./ReviewCard";

// CTA Button
function Button({children}) {
  return (
    <button className={s.btn}>
      <span>{children}</span>
    </button>
  )
}

// Tripadvisor
function ReviewSponsor({sponsorImage}) {
  return (
    <div className={s.reviewSponsor}>
      <div className={s.sponsorContent}>
        <p><WithTransLate text="#2 of 71 houses in Reykjavik" /> {" "}
        <span><WithTransLate text="on" /></span></p>
        <img
            src={sponsorImage}
            alt="sponsor-logo"
          />
      </div>
      <Button><WithTransLate text='read more reviews' /></Button>
    </div>
  )
}

function ReviewSection() {
  return (
    <section className={s.section}>
      <h3><WithTransLate text="Reviews" /></h3>
      <div className={s.sectionWrapper}>
        <ReviewSponsor sponsorImage={tripAdvisor}/>
          <ReviewCard quote={{text: "The location offered an amazing view of the sea", customerName: "Lesley"}}/>
      </div>
    </section>
  )
}

export default ReviewSection
