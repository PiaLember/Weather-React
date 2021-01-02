import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="summary">
        <div className="heading">
          <h1 id="outcome">{props.data.city}</h1>
          <p id="description">{props.data.description}</p>
        </div>
        <div className="description">
          <h5 id="humidity">Humidity: {Math.round(props.data.humidity)}%</h5>
          <h5 id="wind">Wind speed: {Math.round(props.data.wind)} m/s</h5>
        </div>

        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="float-left"
          id="icon"
        />
        <div className="temperature">
          <span className="temp">
            {Math.round(props.data.temperature)}
            <span className="unit">°C</span>
          </span>
        </div>
        <p id="real-feel">Real Feel {Math.round(props.data.feels)}°</p>
      </div>
    </div>
  );
}
