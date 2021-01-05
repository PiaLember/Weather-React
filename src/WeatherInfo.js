import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherTemperature.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="summary">
        <div className="heading">
          <h1 id="outcome">{props.data.city}</h1>
          <p id="description">{props.data.description}</p>
        </div>

        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="float-left"
          id="icon"
        />
        <WeatherTemperature
          celsius={props.data.temperature}
          realFeel={props.data.feels}
        />
        <div className="description">
          <h5 id="humidity">Humidity: {Math.round(props.data.humidity)}%</h5>
          <h5 id="wind">Wind speed: {Math.round(props.data.wind)} m/s</h5>
        </div>
      </div>
    </div>
  );
}
