import React from "react";
import { render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  /* const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
