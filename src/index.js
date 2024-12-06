import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import PropTypes from "prop-types";

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

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App basename={basename} />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
