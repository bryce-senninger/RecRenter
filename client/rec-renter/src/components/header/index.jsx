import React from "react";
import "../header/style-header.css";

function Header() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Rec-Rental</h1>
      <p className="lead">
        A simple way to find and list rentals for recrational gear.
      </p>
      {/* <p className="lead">rentals for recrational gear.</p> */}
      <p className="lead">Plan your next adventure, make</p>
      <p className="lead"> a memory that lasts.</p>
    </div>
  );
}

export default Header;
