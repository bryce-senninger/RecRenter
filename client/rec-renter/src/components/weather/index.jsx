import React from "react";
import "../weather/style-weather.css";

function Weather() {
  return (
    <div
      className="container-weather"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <p className="weather-name">Local Weather</p>
      {/* <p>Local Weather</p> */}
      <a
        class="weatherwidget-io"
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
      {/* <a
        class="weatherwidget-io"
        href="https://forecast7.com/en/40d76n111d89/salt-lake-city/?unit=us"
        data-label_1="SALT LAKE CITY"
        data-label_2="WEATHER"
        data-font="Arial Rounded MT Bold"
        data-icons="Climacons Animated"
        data-shadow="#000000"
        data-textcolor="#ffffff"
        data-highcolor="#ff9120"
        data-lowcolor="#83a5ff"
        data-suncolor="#fff037"
        data-mooncolor="#9fe6ff"
        data-cloudcolor="#000000"
        data-cloudfill="#6cc4ff"
        data-raincolor="#2335b1"
        data-snowcolor="#b8d0ff"
      >
        SALT LAKE CITY WEATHER
      </a> */}
    </div>
  );
}

export default Weather;
