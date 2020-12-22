import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import "./Buttons.css";
import Time from "./Time";
import "./Time.css";
import City from "./City";
import "./City.css";
import Summary from "./Summary";
import "./Summary.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather">
          <Buttons />
          <Time />
          <City />
          <Summary />
        </div>
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
