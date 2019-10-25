import React from "react";
import ReactDOM from "react-dom";
import "../modal/style-modal.css";

// const root = document.getElementById("root");
const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  el = document.createElement("div");
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    fetch("http://localhost:3001/api/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(function(result) {
        return result.json();
      })
      .then(info => console.log(info));
  }

  render() {
    return ReactDOM.createPortal(
      <div
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.3)"
        }}
      >
        <div
          style={{
            padding: 20,
            background: "#fff",
            borderRadius: "2px",
            display: "inline-block",
            minHeight: "300px",
            margin: "1rem",
            position: "relative",
            minWidth: "300px",
            // boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            justifySelf: "center"
          }}
          className="modal-body"
        >
          {this.props.children}
          <hr />
          <form method="POST" action="http://localhost:3001/api/user/login">
            <input
              className="input-sign"
              placeholder="Username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <hr />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <hr />
            <button onClick={this.handleSubmit}>Log In</button>
            <hr />
          </form>
          <a href="/signup">Not a member? Click here to sign up</a>
        </div>
      </div>,
      this.el
    );
  }
}

var modal = document.getElementsByClassName("modal-body");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
export default Modal;
