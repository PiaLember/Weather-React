import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import "./Time.css";
import WeatherInfo from "./WeatherInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      date: new Date(),
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "657e61445d4323be17aa0392f7a7870c";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function currentLocation(position) {
    console.log(position);
    const apiKey = "657e61445d4323be17aa0392f7a7870c";
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function showCurrentLocation(event) {
    navigator.geolocation.getCurrentPosition(currentLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Time date={weatherData.date} />

        <form className="city" id="search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="City"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" id="search-button" />
        </form>
        <span className="buttons">
          <button
            type="button"
            className="btn btn-outline-dark"
            id="current-location"
            onClick={showCurrentLocation}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </button>
        </span>

        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
