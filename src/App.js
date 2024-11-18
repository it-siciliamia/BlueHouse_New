import "./App.css";
import Header from "./components/header";
import HomePage from "./views/homePage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cookies from "./components/Cookies";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import HouseRules from "./views/houseRules";
import Footer from "./components/Footer/Footer";
import Notfound from "./views/Notfound";
import Aboutus from "./views/AboutUs";
import ViewGalery from "./views/viewGalery";
import PrivacyandPolicy from "./views/ImportAndP&P";
import ScrollToTop from "./ScrollToTop";
// import Map from "./components/map/Map";
import SliderPhoto from "./components/SliderPhoto";
import NewsLetter from "./components/NewsLetter/NewsLetter.jsx";
import { useState, useEffect } from "react";
import { createContext } from "react";
//import Home from "./components/Home/Home/Home";
//import BookingPage from "./components/BookingPage/BookingPage";
import EnquirePage from "./components/BookingPage/EnquirePage";
//import Payment from "./components/PaymentPage/Payment";
import ThankYou from "./thankyou/index.js";
import { RedirectBlog, RedirectTripAdv } from "./redirect/Redirect";
import FindMore from "./components/FindMore/FindMore.jsx";
import NewMap from "./components/map/NewMap.js";
import RoomBooking from "./views/roombooking/RoomBooking.jsx";
import SchemaOrg from "./components/helpers/SchemaOrg/SchemaOrg.jsx";
// import Carousel from "./Carousel.js";
// import Galary from "./components/Mobile Galary Section/Galary.js";

export const UserContext = createContext();

function App() {
  const [modalState, setModal] = useState({
    state: false,
    index: 0,
  });
  const [room, setRoom] = useState(false);

  const [right, setRight] = useState("-6000px");
  const [top, setTop] = useState("-200%");

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SchemaOrg />
      <UserContext.Provider value={[modalState, setModal, room, setRoom]}>
        <Router>
          <Switch>
            {/*  <Route exact path="/beds24">
              <Home />
            </Route> 

            <Route path="/book">
              <BookingPage />
            </Route> 

            <Route path="/payment">
              <Payment /> 
            </Route>
            */}
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
                "/view-gallery",
                "/about-us",
                "/privacy-and-policy",
                "/slider-photo",
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
                  <Route exact path="/view-gallery">
                    <ViewGalery />
                    {/* <Galary /> */}
                  </Route>
                  <Route exact path="/about-us">
                    <Aboutus />
                  </Route>
                  <Route exact path="/privacy-and-policy">
                    <PrivacyandPolicy />
                  </Route>
                  <Route exact path="/slider-photo">
                    <SliderPhoto />
                  </Route>
                </Switch>
              </div>
              <Cookies />
              <FindMore />
              {/* <Galary/> */}
              {isMobile ? (
                <>
                  <NewMap />
                  <NewsLetter />
                </>
              ) : (
                <>
                  <NewsLetter />
                  <NewMap />
                </>
              )}
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
    </ThemeProvider>
  );
}

export default App;
