import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { FavouriteContextProvider } from "./store/favourite-context.jsx";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <FavouriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouriteContextProvider>,
  document.getElementById("root")
);
