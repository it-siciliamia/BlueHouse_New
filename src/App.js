import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "@material-ui/styles";
import ScrollToTopButton from "./components/Shared/ScrollToTopButton/ScrollToTopButton.jsx";
import ZohoChat from "./components/helpers/ZohoChat/ZohoChat.jsx";
import combinedSchema from "./components/helpers/SchemaOrg/schema.js";
import CookiesBanner from "./components/CookiesBanner/CookiesBanner.js";
import { HeaderProvider } from "./components/helpers/HeaderContext/HeaderContext";
import { LanguageProvider } from "./components/helpers/translating/LanguageContext.js";
import Header from "./components/header/Header.jsx";
import HomePage from "./views/HomePage/HomePage.jsx";
import Aboutus from "./views/AboutUsPage/AboutUs.jsx";
import PrivacyandPolicyPage from "./views/PrivacyPolicyPage/PrivacyPolicyPage.jsx";
import PageHeader from "./components/Shared/PageHeader/PageHeader.jsx";
import ScrollToTop from "./components/helpers/ScrollToTop.js";
import HouseRules from "./views/HouseRulesPage/HouseRules.jsx";
import Footer from "./components/Footer/Footer.js";
import Notfound from "./views/NotFoundPage/Notfound.js";
import RoomBooking from "./views/roombooking/RoomBooking.jsx";
import RoomDetails from "./views/RoomDetails/RoomDetails.jsx";
import EnquirePage from "./components/BookingPage/EnquirePage.js";
import ThankYou from "./thankyou/index.js";
import NewMap from "./components/map/NewMap";
import {
  RedirectBlog,
  RedirectTripAdv,
} from "./components/helpers/redirect/Redirect.js";
import theme from "./theme.js";
import "./App.css";

export const UserContext = createContext();

App.propTypes = {
  basename: PropTypes.string,
};

function App({ basename }) {
  const [modalState, setModal] = useState({
    state: false,
    index: 0,
  });
  const [room, setRoom] = useState(false);
  const [right, setRight] = useState("-6000px");
  const [top, setTop] = useState("-200%");

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <script type="application/ld+json">{combinedSchema}</script>
        </Helmet>
        <UserContext.Provider value={[modalState, setModal, room, setRoom]}>
          <HeaderProvider>
            <LanguageProvider>
              <ScrollToTop />
              <ScrollToTopButton />
              <ZohoChat />

              <Switch>
                <Route exact path="/enquire">
                  <EnquirePage />
                </Route>
                <Route path="/thankyou">
                  <ThankYou />
                </Route>
                <Route path="/blog">
                  <RedirectBlog />
                </Route>
                <Route path="/tripadvisor">
                  <RedirectTripAdv />
                </Route>
                <Route
                  exact
                  path={[
                    "/",
                    "/house-rules",
                    "/about-us",
                    "/privacy-and-policy",
                    "/book",
                    "/enquire",
                    "/beds24",
                    "/beds24/:room",
                  ]}
                >
                  <Header
                    top={top}
                    setTop={setTop}
                    right={right}
                    setRight={setRight}
                  />
                  <div className="App">
                    <ScrollToTop />
                    <PageHeader />
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <Route exact path="/house-rules">
                      <HouseRules />
                    </Route>
                    <Route exact path="/about-us">
                      <Aboutus />
                    </Route>
                    <Route exact path="/privacy-and-policy">
                      <PrivacyandPolicyPage />
                    </Route>
                    <Route path="/beds24/:room">
                      <RoomDetails />
                    </Route>
                    <Route exact path="/beds24">
                      <RoomBooking />
                    </Route>
                  </div>
                  <CookiesBanner />
                  <NewMap />
                  <Footer />
                </Route>
                <>
                  <Header
                    top={top}
                    setTop={setTop}
                    right={right}
                    setRight={setRight}
                  />
                  <Notfound />
                </>
              </Switch>
            </LanguageProvider>
          </HeaderProvider>
        </UserContext.Provider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
