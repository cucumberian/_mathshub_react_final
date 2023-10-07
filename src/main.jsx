import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import store from "./store/index.js";

import "./index.css";

ReactDOM.createRoot(document.getElementById("main")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
