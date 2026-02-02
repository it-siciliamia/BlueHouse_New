import HouseRulesComponents from "../../components/HouseRulesComponent/HouseRulesComponent.jsx";
import Support from "../../components/SuportComponent/support.jsx";
import Newsletter from "../../components/Newsletter/Newsletter.jsx";
import ReviewSection from "../../components/ReviewSlider/ReviewSection.jsx";

function HouseRules() {
  return (
    <div>
      <HouseRulesComponents />
      <ReviewSection isHouseRulesPage={true} />
      <Support isHouseRulesPage={true} />
      <Newsletter />
    </div>
  );
}

export default HouseRules;
