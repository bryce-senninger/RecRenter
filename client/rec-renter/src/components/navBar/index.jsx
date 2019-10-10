import React from "react";
import icon from "./mountain.png";

function NavBar() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <img width={40} height={40} src={icon}></img>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Search
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Post
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Saved Posts
        </a>
      </li>
      <li className="nav-item">
        <button className="btn btn-primary">Sign Up / Log In</button>
      </li>
    </ul>
  );
}

export default NavBar;
