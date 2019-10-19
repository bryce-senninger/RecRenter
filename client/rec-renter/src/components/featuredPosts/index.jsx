import React from "react";
import "../featuredPosts/style-feature.css";

function Featured(props) {
  return (
    <div className="featuredPosts">
      <div className="card-two">
        <div className="card-body-two">
          <h5 className="card-title">Featured Post Card</h5>
          <p className="card-text">Featured Post 1</p>
          <div className="feature"></div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
