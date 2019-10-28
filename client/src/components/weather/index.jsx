import React from "react";
import "./style-weather.css";

function Weather() {
  return (
    <div
      className="container-weather"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <p className="weather-name">Local Weather</p>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/40d76n111d89/salt-lake-city/?unit=us"
        data-label_1="SALT LAKE CITY"
        data-label_2="WEATHER"
        data-font="Open Sans"
        data-icons="Climacons Animated"
        data-textcolor="white"
        data-highcolor="#ff8200"
        data-lowcolor="#6b7eff"
        data-suncolor="#ffab00"
        data-mooncolor="#cce0ff"
        data-cloudcolor="#ffffff"
        data-cloudfill="#446eff"
        data-raincolor="#1a00c9"
        data-snowcolor="#5143ff"
      >
        SALT LAKE CITY WEATHER
      </a>
    </div>
  );
}

export default Weather;
