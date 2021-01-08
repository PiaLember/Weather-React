import React from "react";
import "./WeatherForecast.css";

export default function FahrenheitForecastPreview(props) {
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°`;
  }

  function forecastDay() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[new Date(props.data.dt * 1000).getDay()];
    return day;
  }
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  return (
    <div className="weatherForecastPreview">
      <img
        id="forecast-icon"
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt={`http://openweathermap.org/img/wn/${props.data.weather[0].description}@2x.png`}
      />
      <span className="forecast-temp">{temperature()}</span>
      <span id="forecast-day">{forecastDay()}</span>
      <span className="forecast-hours">{hours()}</span>
    </div>
  );
}
