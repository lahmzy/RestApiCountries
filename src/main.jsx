import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateContext } from "./context/stateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateContext>
);
