import React from "react";
import icon from "./mountain.png";
import logo from "./logo-3.png";
import lock from "./lock.png";
import "../navBar/style-nav.css";

function NavBar() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <img width={50} height={50} src={logo}></img>
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
      <li className="nav-item ml-auto">
        {/* <img src={lock} alt="" /> */}
        <button className="btn btn-primary pull-right">
          Sign Up / Log In
          {/* <img src={lock} alt="" /> */}
        </button>
      </li>
    </ul>
  );
}

export default NavBar;
