import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";

const isGitHubPages = window.location.hostname.includes("github.io");

const basename = isGitHubPages ? "/BlueHouse_New" : "/";

const Router = ({ children }) =>
  isGitHubPages ? (
    <HashRouter basename={basename}>{children}</HashRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
