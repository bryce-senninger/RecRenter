import React from "react";
import icon from "./mountain.png";
import logo from "./logo-3.png";
import lock from "./lock.png";
import "../navBar/style-nav.css";
import Modal from "../modal";

class NavBar extends React.Component {
  state = { showModal: false };
  handleShowMessageClick = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  render() {
    return (
      // <div>
      <div class="navbar-expand-lg ">
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navCollapse"
          // data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* &#9776; */}
          <span class="navbar-toggler-icon">&#9776;</span>
        </button>
        <ul className="nav">
          <li className="nav-item">
            <img width={50} height={50} src={logo}></img>
          </li>
          <li></li>
          <div className="collapse navbar-collapse" id="navCollapse">
            <li className="nav-item">
              <a className="nav-link active" href="/">
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
              <button
                className="btn btn-primary pull-right"
                onClick={this.handleShowMessageClick}
              >
                Sign Up / Log In
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
