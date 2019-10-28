import React from "react";
import { Link } from "react-router-dom";
import "./style-nav.css";
import Modal from "../modal";
import newlogo from "./new-logo-white.png";

class NavBar extends React.Component {
  state = { showModal: false };
  handleShowMessageClick = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  render() {
    return (
      <div className="navbar-expand-lg ">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navCollapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
    );
  }
}

export default NavBar;
