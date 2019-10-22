import React from "react";
import ReactDOM from "react-dom";
import "../modal/style-modal.css";

// const root = document.getElementById("root");
const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  el = document.createElement("div");
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
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
          <input placeholder="  Username"></input>
          <hr />
          <input placeholder="  Password"></input>
          <hr />
          <button onClick={this.props.onClose}>Log In</button>
          <hr />
          <a href="/signup">Not a member? Click here to sign up</a>
        </div>
      </div>,
      this.el
    );
  }
}

export default Modal;
