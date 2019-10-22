import React from "react";
import "../weather/style-weather.css";

function Weather() {
  return (
    <div className="container-weather">
      {/* <p>Local Weather</p> */}
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/40d76n111d89/salt-lake-city/?unit=us"
        data-label_1="Salt Lake City"
        data-label_2="7 Day Forecast"
      >
        Weather
      </a>
    </div>
  );
}

export default Weather;
