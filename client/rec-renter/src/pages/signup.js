import React, { Component } from "react";
import SignUpForm from "../components/signUpForm";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    username: "",
    password: "",
    imagePath: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.item);

    fetch("http://localhost:3001/api/user/signup", {
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
  };

  render() {
    return (
      <div className="App">
        <SignUpForm
          firstname={this.state.firstname}
          lastname={this.lastname}
          city={this.city}
          state={this.state}
          zip={this.zip}
          email={this.email}
          username={this.username}
          password={this.password}
          imagePath={this.imagePath}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default SignUp;
