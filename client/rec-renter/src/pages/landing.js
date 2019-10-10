import React, { Component } from "react";
import Header from "../components/header";
import NavBar from "../components/navBar";
import MissionCard from "../components/mission";
import News from "../components/news";
import Weather from "../components/weather";
import Featured from "../components/featuredPosts";

class Landing extends Component {
  state = {};

  //lifecycle methods
  //functional methods
  render() {
    return (
      <div className="App">
        <Header />
        <MissionCard />
        <News />
        <Weather />
        <Featured />
      </div>
    );
  }
}

export default Landing;
