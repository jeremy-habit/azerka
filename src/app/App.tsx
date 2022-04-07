import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { url } from "../config/url";

function App(): ReactElement {
  return (
    <div>
      <ul>
        <li>
          <Link to={url.home}>Home</Link>
        </li>
        <li>
          <Link to={url.about}>About</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default App;
