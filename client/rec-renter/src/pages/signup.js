import React, { Component } from "react";
// import Header from "../components/header";
// import MissionCard from "../components/mission";
// import News from "../components/news";
// import Weather from "../components/weather";
// import Featured from "../components/featuredPosts";
import SignUpForm from "../components/signUpForm";

class SignUp extends Component {
  // constructor(props) {
  // super(props);
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
  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
  // }
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

  //lifecycle methods
  //functional methods
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
