import React from "react";
import icon from "./mountain.png";
import logo from "./logo-3.png";
import lock from "./lock.png";
import "../navBar/style-nav.css";

function NavBar() {
  return (
    <nav className="navbar-nav mr-auto">
      <ul className="nav">
        <li className="nav-item">
          <img width={75} height={75} src={logo}></img>
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
          <button className="btn btn-primary pull-right">
            Sign Up / Log In
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
