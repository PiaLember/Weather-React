import React from "react";

export default function Summary() {
  let weatherData = {
    city: "Dallas",
    description: "Cloudy",
    temperature: "11",
    realFeel: "8",
    humidity: "0",
    wind: "2",
  };
  return (
    <div className="summary">
      <div className="heading">
        <h1 id="outcome">{weatherData.city}</h1>
        <p id="description">{weatherData.description}</p>
      </div>
      <div className="description">
        <h5 id="humidity">Humidity: {weatherData.humidity}%</h5>
        <h5 id="wind">Wind speed: {weatherData.wind} m/s</h5>
      </div>

      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="Clear"
        className="float-left"
        id="icon"
      />
      <h2 id="temp">{weatherData.temperature} F°</h2>
      <p id="real-feel">Real Feel {weatherData.realFeel} F°</p>
    </div>
  );
}
