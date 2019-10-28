import React from "react";
import "./style.css";

function Carousel() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-pause="false"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active slide1">
          <div className="carousel-content"></div>
        </div>
        <div className="carousel-item slide2">
          <div className="carousel-content"></div>
        </div>
        <div className="carousel-item slide3">
          <div className="carousel-content"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
