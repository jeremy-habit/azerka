import React, { ReactElement } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import App from "./App";
import { url } from "../config/url";

function Router(): ReactElement {
  return (
    <HashRouter basename="">
      <App />
      <Routes>
        <Route path={url.home} element={<Home />} />
        <Route path={url.about} element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
