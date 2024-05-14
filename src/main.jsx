import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
