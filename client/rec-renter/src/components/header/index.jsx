import React from "react";
import "../header/style-header.css";

function Header() {
  return (
    <div
      className="jumboWrap"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="jumbotron landingJumbo">
        <h1 className="display-4">Rec Renter</h1>
        <p className="lead">
          A simple way to find and list rentals for recrational gear
        </p>
        <p className="lead">
          Plan your next adventure, make a memory that lasts
        </p>
      </div>
    </div>
  );
}

export default Header;
