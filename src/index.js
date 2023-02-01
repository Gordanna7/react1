import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
  </Provider>
);
