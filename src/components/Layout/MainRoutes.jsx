import { Route, Switch } from "react-router-dom";
import Layout from "./Layout";

import Aboutus from "../../views/AboutUsPage/AboutUs.jsx";
import HouseRules from "../../views/HouseRulesPage/HouseRules.jsx";
import PaymentPage from "../../views/PaymentPage/PaymentPage.jsx";
import PrivacyandPolicyPage from "../../views/PrivacyPolicyPage/PrivacyPolicyPage.jsx";
import RoomBooking from "../../views/roombooking/RoomBooking.jsx";
import RoomDetails from "../../views/RoomDetails/RoomDetails.jsx";

function MainRoutes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/house-rules" component={HouseRules} />
        <Route exact path="/about-us" component={Aboutus} />
        <Route
          exact
          path="/privacy-and-policy"
          component={PrivacyandPolicyPage} />
        <Route path="/beds24/:room" component={RoomDetails} />
        <Route exact path="/beds24" component={RoomBooking} />
        <Route exact path="/payment" component={PaymentPage} />
      </Switch>
    </Layout>
  );
}

export default MainRoutes;
