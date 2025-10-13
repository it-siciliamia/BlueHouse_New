import React, { useState, createContext, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "@material-ui/styles";
import ScrollToTopButton from "./components/Shared/ScrollToTopButton/ScrollToTopButton.jsx";
import ZohoChat from "./components/helpers/ZohoChat/ZohoChat.jsx";
import combinedSchema from "./components/helpers/SchemaOrg/schema.js";
import { HeaderProvider } from "./components/helpers/HeaderContext/HeaderContext";
import { LanguageProvider } from "./components/helpers/translating/LanguageContext.js";
import HomePage from "./views/HomePage/HomePage.jsx";
import ScrollToTop from "./components/helpers/ScrollToTop.js";
import Notfound from "./views/NotFoundPage/Notfound.js";
import EnquirePage from "./components/BookingPage/EnquirePage.js";
import ThankYou from "./thankyou/index.js";
import {
  RedirectBlog,
  RedirectTripAdv,
} from "./components/helpers/redirect/Redirect.js";
import theme from "./Styles/theme.js";
import "./Styles/App.css";
import Layout from "./components/Layout/Layout.jsx";
import HeaderOnlyLayout from "./components/Layout/HeaderOnlyLayout.jsx";
import MainRoutes from "./components/Layout/MainRoutes.jsx";
const ThirdPartyScriptsLoader = lazy(() =>
  import("./marketing/ThirdPartyScriptsLoader.jsx")
);

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
              <Suspense fallback={null}>
                <ThirdPartyScriptsLoader />
              </Suspense>

              <Switch>
                <Route exact path="/enquire" component={EnquirePage} />
                <Route exact path="/thankyou" component={ThankYou} />
                <Route exact path="/blog" component={RedirectBlog} />
                <Route exact path="/tripadvisor" component={RedirectTripAdv} />
                <Route exact path="/"><Layout><HomePage /></Layout></Route>
                <Route
                  path={[
                    "/house-rules",
                    "/about-us",
                    "/privacy-and-policy",
                    "/book",
                    "/beds24",
                    "/beds24/:room",
                    "/payment",
                  ]}
                  component={MainRoutes}
                />
                <Route render={() => <HeaderOnlyLayout><Notfound /></HeaderOnlyLayout>} />
              </Switch>

            </LanguageProvider>
          </HeaderProvider>
        </UserContext.Provider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
