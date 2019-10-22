import React from "react";
import "../mission/style-mission.css";
import logo from "./mission-one-2.png";
import logo2 from "./mission-one.png";
import tree from "./ecology.png";
import money from "./save-money.png";
import bike from "./ski.png";
// import icon from "./tree.png";

function MissionCard() {
  return (
    <>
      <h2 className="mission-header">What is Rec Renter?</h2>
      <div className="container">
        {/* <h2 className="mission-header">What is Rec Renter?</h2> */}
        <div className="card-one">
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={tree}
              className="img-mission"
            ></img>
            <p className="card-text">
              At the heart of our mission is a love and appreciation of the
              outdoors. We believe that by sharing recreational gear we can
              reduce the ecological impact of product maintenence and
              production, while simultaneously promoting a love and appreciation
              of all the beauty that is to be found just outside our front
              doors.
            </p>
          </div>
        </div>
        <div className="card-one">
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={bike}
              className="img-mission"
            ></img>
            <p className="card-text">
              Up next, supporting the love and passion our users have for
              outdoor activities. By making it easy, accessible, and affordable
              for users to explore new recreational hobbies we hope to expose
              people to new experiences and passions they may not have otherwise
              found. With Rec Renter, planning your next adventure is just a few
              clicks away.
            </p>
          </div>
        </div>
        <div className="card-one">
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={money}
              className="img-mission"
            ></img>
            <p className="card-text">
              And lastly, our mission of helping our users make and save money.
              Outdoor hobbies can be expensive, and we provide individuals a way
              to make money back off their purchases, while also promoting a
              marketplace where renters can locate gear without paying brick and
              mortar rental markups.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionCard;
