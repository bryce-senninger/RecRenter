import React from "react";
import "../featuredPosts/style-feature.css";

function Featured(props) {
  return (
    <div
      className="featuredPosts"
      data-aos="fade-left"
      data-aos-duration="1500"
    >
      <p className="p-feature">Today's Featured Post</p>
      <div className="card-two featureCard">
        <div className="card-body-two">
          <div className="feature">
            <h1 className="card-title featuredTitle">{props.title}</h1>
            <div className="featuredItemText">
              <h2 className="price">${props.price} per day</h2>
              <h2>Location: {props.location}</h2>
              <br></br>
              <h2 className="featureDescription">{props.description}</h2>
              <br></br>
              <h2 className="featureEmail">Contact Lister: {props.email}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
