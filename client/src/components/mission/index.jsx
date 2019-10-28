import React from "react";
import "./style-mission.css";
import money2 from "./white-money.png";
import bike2 from "./white-bike.png";
import tree3 from "./tree-whit.png";

function MissionCard() {
  return (
    <>
      <h2
        className="mission-header"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        What is Rec Renter?
      </h2>
      <div className="container">
        <div
          className="card-one"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={tree3}
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
        <div className="card-one" data-aos="fade-up" data-aos-duration="1000">
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={bike2}
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
        <div className="card-one" data-aos="fade-left" data-aos-duration="1000">
          <div className="card-body-one">
            <img
              alt=""
              width={150}
              height={150}
              src={money2}
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
