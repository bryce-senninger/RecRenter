import React, { Component } from "react";
import Header from "../components/header";
import MissionCard from "../components/mission";
import News from "../components/news";
import Weather from "../components/weather";
import Featured from "../components/featuredPosts";
import SignUpForm from "../components/signUpForm";

class SignUp extends Component {
  state = {};

  //lifecycle methods
  //functional methods
  render() {
    return (
      <div className="App">
        <SignUpForm />
      </div>
    );
  }
}

export default SignUp;
