import { useState } from "react";
import Header from "./components/header";
import HomePage from "./views/homePage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import schema from "./components/helpers/SchemaOrg/schema.js";
import Cookies from "./components/Cookies";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import ZohoChat from "./components/helpers/ZohoChat/ZohoChat.jsx";
import ScrollToTopButton from "./components/Shared/ScrollToTopButton/ScrollToTopButton.jsx";
import PageHeader from "./components/Shared/PageHeader/PageHeader";
import ScrollToTop from "./ScrollToTop";
import HouseRules from "./views/houseRules";
import Footer from "./components/Footer/Footer";
import Notfound from "./views/Notfound";
import Aboutus from "./views/AboutUs";
import PrivacyandPolicy from "./views/ImportAndP&P";
import { createContext } from "react";
import EnquirePage from "./components/BookingPage/EnquirePage";
import ThankYou from "./thankyou/index.js";
import { RedirectBlog, RedirectTripAdv } from "./redirect/Redirect";
import NewMap from "./components/map/NewMap.js";
import RoomBooking from "./views/roombooking/RoomBooking.jsx";
import "./App.css";

export const UserContext = createContext();

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
          <script type="application/ld+json">{schema}</script>
        </Helmet>
        <UserContext.Provider value={[modalState, setModal, room, setRoom]}>
          <Router basename={basename}>
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
                ]}
              >
                <div className="App">
                  <Header
                    top={top}
                    setTop={setTop}
                    right={right}
                    setRight={setRight}
                  />
                  <ScrollToTop />
                  <PageHeader />
                  <Switch>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <Route exact path="/beds24">
                      <RoomBooking />
                    </Route>
                    <Route exact path="/house-rules">
                      <HouseRules />
                    </Route>
                    <Route exact path="/about-us">
                      <Aboutus />
                    </Route>
                    <Route exact path="/privacy-and-policy">
                      <PrivacyandPolicy />
                    </Route>
                  </Switch>
                </div>
                <Cookies />
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
          </Router>
        </UserContext.Provider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
