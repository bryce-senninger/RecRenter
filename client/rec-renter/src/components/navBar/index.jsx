import React from "react";
// import icon from "./mountain.png";
// import logo from "./logo-3.png";
import { Link } from "react-router-dom";
// import lock from "./lock.png";
import "../navBar/style-nav.css";
import Modal from "../modal";
import newlogo from "./new-logo-white.png";

class NavBar extends React.Component {
  state = { showModal: false };
  handleShowMessageClick = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  render() {
    return (
      // <div>
      <div className="navbar-expand-lg ">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navCollapse"
          // data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* &#9776; */}
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <ul className="nav">
          <li className="nav-item">
            <img alt="" width={50} height={50} src={newlogo}></img>
          </li>
          <li></li>
          <div className="collapse navbar-collapse" id="navCollapse">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/searchlistings"
                className={
                  window.location.pathname === "/searchlistings"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/postlisting"
                className={
                  window.location.pathname === "/postlisting"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Post
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/savedlistings"
                className={
                  window.location.pathname === "/savedlistings"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Saved Posts
              </Link>
            </li>

            <li className="nav-item ml-auto">
              <button
                className="btn btn-primary pull-right"
                id="button-nav"
                onClick={this.handleShowMessageClick}
              >
                Log In
                {/* <img src={lock} alt="" /> */}
              </button>

              {this.state.showModal ? (
                <Modal onClose={this.handleCloseModal}>
                  Log in to Rec Renter
                </Modal>
              ) : null}
            </li>
          </div>
        </ul>
      </div>
      // </div>
    );
  }
}

// {document.onauxclick}

export default NavBar;
