import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  function fahrenheitFeel() {
    return (props.realFeel * 9) / 5 + 32;
  }
  function fahrenheitWind() {
    return props.wind * 2.237;
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          <span className="temp">
            {Math.round(props.celsius)}
            <span className="unit">
              {" "}
              °C |
              <a href="/" onClick={showFahrenheit}>
                °F
              </a>
            </span>
          </span>
        </div>
        <p id="real-feel">Real Feel {Math.round(props.realFeel)}°</p>
        <div className="description">
          <p id="humidity">Humidity: {Math.round(props.humidity)}%</p>
          <p id="wind">Wind speed: {Math.round(props.wind)} m/s</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          <span className="temp">
            {Math.round(fahrenheit())}
            <span className="unit">
              {" "}
              <a href="/" onClick={showCelsius}>
                °C
              </a>{" "}
              | °F
            </span>
          </span>
        </div>
        <p id="real-feel">Real Feel {Math.round(fahrenheitFeel())}°</p>
        <div className="description">
          <p id="humidity">Humidity: {Math.round(props.humidity)}%</p>
          <p id="wind">Wind speed: {Math.round(fahrenheitWind())} mph</p>
        </div>
      </div>
    );
  }
}
