import React from "react";
import "../mission/style-mission.css";
import logo from "./mission-one-2.png";
import logo2 from "./mission-one.png";
// import icon from "./tree.png";

function MissionCard() {
  return (
    <>
      <h2 className="mission-header">What is Rec Renter?</h2>
      <div className="container">
        {/* <h2 className="mission-header">What is Rec Renter?</h2> */}
        <div className="card-one">
          <div className="card-body-one">
            <h5 className="card-title"></h5>
            <img
              width={150}
              height={150}
              src={logo}
              className="img-mission"
            ></img>
            <p className="card-text">
              Mission statement 1 : Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Optio hic culpa perspiciatis quidem odit
              temporibus velit illum mollitia facere asperiores alias dicta
              molestias vel dolorum libero dolorem, debitis nostrum cupiditate.
            </p>
          </div>
        </div>
        <div className="card-one">
          <div className="card-body-one">
            <h5 className="card-title"></h5>
            <img
              width={150}
              height={150}
              src={logo2}
              className="img-mission"
            ></img>
            <p className="card-text">
              Mission statement 1 : Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Optio hic culpa perspiciatis quidem odit
              temporibus velit illum mollitia facere asperiores alias dicta
              molestias vel dolorum libero dolorem, debitis nostrum cupiditate.
            </p>
          </div>
        </div>
        <div className="card-one">
          <div className="card-body-one">
            <h5 className="card-title"></h5>
            <img
              width={150}
              height={150}
              src={logo}
              className="img-mission"
            ></img>
            <p className="card-text">
              Mission statement 1 : Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Optio hic culpa perspiciatis quidem odit
              temporibus velit illum mollitia facere asperiores alias dicta
              molestias vel dolorum libero dolorem, debitis nostrum cupiditate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionCard;
