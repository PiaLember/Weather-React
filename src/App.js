import React from "react";
import "./App.css";

import Weather from "./Weather";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />
        <small className="Footer">
          <a
            href="https://github.com/PiaLember/Weather-React"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by PiaL
        </small>
      </div>
    </div>
  );
}
