import React from "react";
import "../weather/style-weather.css";

function Weather() {
  return (
    <div className="container-weather">
      {/* <p>Local Weather</p> */}
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/40d76n111d89/salt-lake-city/?unit=us"
        data-label_1="SALT LAKE CITY"
        data-label_2="WEATHER"
        data-theme="original"
      >
        SALT LAKE CITY WEATHER
      </a>
    </div>
  );
}

export default Weather;
