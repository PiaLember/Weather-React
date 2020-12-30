import React, { useState } from "react";
import axios from "axios";
import Buttons from "./Buttons";
import "./Buttons.css";
import Time from "./Time";
import "./Time.css";
import WeatherInfo from "./WeatherInfo";

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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Buttons />
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
