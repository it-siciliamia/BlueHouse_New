import { ThemeProvider } from "@mui/material/styles";
import { lazy, Suspense, useMemo, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

import "./Styles/App.scss";
import EnquirePage from "./components/BookingPage/EnquirePage.jsx";
import { RedirectBlog, RedirectTripAdv } from "./components/helpers/redirect/Redirect.jsx";
import combinedSchema from "./components/helpers/SchemaOrg/schema.js";
import ScrollToTop from "./components/helpers/ScrollToTop.js";
import { LanguageProvider } from "./components/helpers/translating/LanguageContext.jsx";
import ZohoChat from "./components/helpers/ZohoChat/ZohoChat.jsx";
import HeaderOnlyLayout from "./components/Layout/HeaderOnlyLayout.jsx";
import Layout from "./components/Layout/Layout.jsx";
import ScrollToTopButton from "./components/Shared/ScrollToTopButton/ScrollToTopButton.jsx";
import { UserContext } from "./context/UserContext.js";
import theme from "./Styles/theme.js";
import ThankYou from "./thankyou/index.jsx";
import AboutUs from "./views/AboutUsPage/AboutUs.jsx";
import HomePage from "./views/HomePage/HomePage.jsx";
import HouseRules from "./views/HouseRulesPage/HouseRules.jsx";
import Notfound from "./views/NotFoundPage/Notfound.jsx";
import PaymentPage from "./views/PaymentPage/PaymentPage.jsx";
import PrivacyandPolicyPage from "./views/PrivacyPolicyPage/PrivacyPolicyPage.jsx";
import RoomBooking from "./views/roombooking/RoomBooking.jsx";
import RoomDetails from "./views/RoomDetails/RoomDetails.jsx";

const ThirdPartyScriptsLoader = lazy(() => import("./marketing/ThirdPartyScriptsLoader.jsx"));

function App() {
  const [modalState, setModal] = useState({
    state: false,
    index: 0,
  });
  const [room, setRoom] = useState(false);

  // Memoize UserContext value to prevent unnecessary re-renders of consumers
  // Only recreate when modalState or room actually change
  const userContextValue = useMemo(() => [modalState, setModal, room, setRoom], [modalState, room]);

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <script type="application/ld+json">{combinedSchema}</script>
        </Helmet>
        <UserContext.Provider value={userContextValue}>
          <LanguageProvider>
            <ScrollToTop />
            <ScrollToTopButton />
            <ZohoChat />
            <Suspense fallback={null}>
              <ThirdPartyScriptsLoader />
            </Suspense>

            <Routes>
              {/* Routes with map visible */}
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="house-rules" element={<HouseRules />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="privacy-and-policy" element={<PrivacyandPolicyPage />} />
              </Route>

              {/* Routes with map hidden */}
              <Route path="/" element={<Layout hideMap />}>
                <Route path="book" element={<RoomBooking />} />
                <Route path="beds24" element={<RoomBooking />} />
                <Route path="beds24/:room" element={<RoomDetails />} />
                <Route path="payment" element={<PaymentPage />} />
              </Route>

              {/* Standalone routes */}
              <Route path="/enquire" element={<EnquirePage />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/blog" element={<RedirectBlog />} />
              <Route path="/tripadvisor" element={<RedirectTripAdv />} />
              <Route
                path="*"
                element={
                  <HeaderOnlyLayout>
                    <Notfound />
                  </HeaderOnlyLayout>
                }
              />
            </Routes>
          </LanguageProvider>
        </UserContext.Provider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
