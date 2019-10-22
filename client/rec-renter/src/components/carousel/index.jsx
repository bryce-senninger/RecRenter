import React from "react";
import "./style.css";

function Carousel() {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-pause="false"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active slide1">
          <div class="carousel-content"></div>
        </div>
        <div class="carousel-item slide2">
          <div class="carousel-content"></div>
        </div>
        <div class="carousel-item slide3">
          <div class="carousel-content"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
