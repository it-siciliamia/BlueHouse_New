import React, { useState, createContext, lazy, Suspense, useMemo } from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "@mui/material/styles";
import ScrollToTopButton from "./components/Shared/ScrollToTopButton/ScrollToTopButton.jsx";
import ZohoChat from "./components/helpers/ZohoChat/ZohoChat.jsx";
import combinedSchema from "./components/helpers/SchemaOrg/schema.js";
import { LanguageProvider } from "./components/helpers/translating/LanguageContext.jsx";
import HomePage from "./views/HomePage/HomePage.jsx";
import ScrollToTop from "./components/helpers/ScrollToTop.js";
import Notfound from "./views/NotFoundPage/Notfound.jsx";
import EnquirePage from "./components/BookingPage/EnquirePage.jsx";
import ThankYou from "./thankyou/index.jsx";
import {
  RedirectBlog,
  RedirectTripAdv,
} from "./components/helpers/redirect/Redirect.jsx";
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

  // Memoize UserContext value to prevent unnecessary re-renders of consumers
  // Only recreate when modalState or room actually change
  const userContextValue = React.useMemo(
    () => [modalState, setModal, room, setRoom],
    [modalState, room]
  );

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
              <Route path="/enquire" element={<EnquirePage />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="/blog" element={<RedirectBlog />} />
              <Route path="/tripadvisor" element={<RedirectTripAdv />} />
              <Route
                path="/"
                element={
                  <Layout>
                    <HomePage />
                  </Layout>
                }
              />
              <Route path="/house-rules" element={<MainRoutes />} />
              <Route path="/about-us" element={<MainRoutes />} />
              <Route path="/privacy-and-policy" element={<MainRoutes />} />
              <Route path="/book" element={<MainRoutes />} />
              <Route path="/beds24" element={<MainRoutes />} />
              <Route path="/beds24/:room" element={<MainRoutes />} />
              <Route path="/payment" element={<MainRoutes />} />
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
