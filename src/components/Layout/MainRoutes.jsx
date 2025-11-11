import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";

import Aboutus from "../../views/AboutUsPage/AboutUs.jsx";
import HouseRules from "../../views/HouseRulesPage/HouseRules.jsx";
import PaymentPage from "../../views/PaymentPage/PaymentPage.jsx";
import PrivacyandPolicyPage from "../../views/PrivacyPolicyPage/PrivacyPolicyPage.jsx";
import RoomBooking from "../../views/roombooking/RoomBooking.jsx";
import RoomDetails from "../../views/RoomDetails/RoomDetails.jsx";

function MainRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/house-rules" element={<HouseRules />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/privacy-and-policy" element={<PrivacyandPolicyPage />} />
        <Route path="/beds24/:room" element={<RoomDetails />} />
        <Route path="/beds24" element={<RoomBooking />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Layout>
  );
}

export default MainRoutes;
