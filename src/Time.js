import React from "react";

export default function Time() {
  let weatherData = {
    day: "Monday",
    hour: "13",
    minutes: "37",
  };
  return (
    <div className="time">
      <h6 id="time">
        {weatherData.day} {weatherData.hour}:{weatherData.minutes}
      </h6>
    </div>
  );
}
