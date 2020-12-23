import React, { useState } from "react";
import axios from "axios";

export default function Summary() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png#",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="summary">
        <div className="heading">
          <h1 id="outcome">{weatherData.city}</h1>
          <p id="description">{weatherData.description}</p>
        </div>
        <div className="description">
          <h5 id="humidity">Humidity: {Math.round(weatherData.humidity)}%</h5>
          <h5 id="wind">Wind speed: {Math.round(weatherData.wind)} m/s</h5>
        </div>

        <img
          src={weatherData.iconUrl}
          alt="Clear"
          className="float-left"
          id="icon"
        />
        <div className="temperature">
          <span className="temp">
            {Math.round(weatherData.temperature)}
            <span className="unit">°C</span>
          </span>
        </div>
        <p id="real-feel">Real Feel {Math.round(weatherData.feels)}°</p>
      </div>
    );
  } else {
    const apiKey = "657e61445d4323be17aa0392f7a7870c";
    let city = "Dallas";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
