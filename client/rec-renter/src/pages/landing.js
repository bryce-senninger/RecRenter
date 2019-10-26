import React, { Component } from "react";
import Header from "../components/header";
import MissionCard from "../components/mission";
import News from "../components/news";
import Weather from "../components/weather";
import Featured from "../components/featuredPosts";
import "./style.css";

class Landing extends Component {
  state = {
    featuredListing: {
      title: "",
      price: "",
      description: "",
      location: "",
      email: ""
    }
  };

  //lifecycle methods
  componentDidMount() {
    this.getFeaturedListing();
  }
  //functional methods
  getFeaturedListing = () => {
    //might need to change this id after reseeding tomorrow? this is to pull all skiing, then we could just pull an index
    fetch("http://localhost:3001/api/item/5db29e2285747425103a68f5", {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(function(result) {
        return result.json();
      })

      .then(info => {
        this.setState({ featuredListing: info[1] });
        console.log(this.state.featuredListing, "featured listing");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <MissionCard />

        <div className="weather container">
          <Weather />
        </div>
        <div className="news container">
          <News />
          <Featured
            title={this.state.featuredListing.title}
            price={this.state.featuredListing.price}
            description={this.state.featuredListing.description}
            location={this.state.featuredListing.location}
            email={this.state.featuredListing.email}
          />
        </div>
      </div>
    );
  }
}

export default Landing;
