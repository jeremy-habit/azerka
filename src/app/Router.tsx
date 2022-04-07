import React, { ReactElement } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import { url } from "@config/url";
import App from "@app/App";
import Home from "@pages/Home";
import About from "@pages/About";

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
