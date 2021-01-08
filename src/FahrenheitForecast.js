import React, { useState } from "react";
import FahrenheitForecastPreview from "./FahrenheitForecastPreview";
import axios from "axios";

export default function FahrenheitForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [unit, setUnit] = useState(null);

  function handleResponse(response) {
    setForecast(response.data);
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="weatherForecast">
        <p id="next-hours">Next 24 hours:</p>
        <FahrenheitForecastPreview data={forecast.list[0]} />
        <FahrenheitForecastPreview data={forecast.list[1]} />
        <FahrenheitForecastPreview data={forecast.list[2]} />
        <FahrenheitForecastPreview data={forecast.list[3]} />
        <FahrenheitForecastPreview data={forecast.list[4]} />
        <FahrenheitForecastPreview data={forecast.list[5]} />
        <FahrenheitForecastPreview data={forecast.list[6]} />
        <FahrenheitForecastPreview data={forecast.list[7]} />
        <FahrenheitForecastPreview data={forecast.list[8]} />
      </div>
    );
  } else {
    let apiKey = "657e61445d4323be17aa0392f7a7870c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
