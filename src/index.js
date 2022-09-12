import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/index.scss";
import App from "./App";
import Infopage from "./components/Infopage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":id" element={<Infopage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
