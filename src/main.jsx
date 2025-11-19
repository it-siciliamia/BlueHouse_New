import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import PropTypes from "prop-types";

// Initialize Firebase before rendering app
import "./firebase/index.js";

const isGitHubPages = window.location.hostname.includes("github.io");

const basename = "/";

const Router = ({ children }) =>
  isGitHubPages ? (
    <HashRouter basename={basename}>{children}</HashRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App basename={basename} />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
