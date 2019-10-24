import React, { Component } from "react";
import SavedHeader from "../components/savedHeader";
import "./style.css";

class SavedListings extends Component {
  // state = { options, category: undefined };
  state = {};

  //lifecycle methods
  // componentDidMount() {
  //   fetch("http://localhost:3001/api/category", {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json"
  //     }
  //     // body: JSON.stringify(this.state)
  //   })
  //     .then(function(result) {
  //       return result.json();
  //     })

  //     .then(info => {
  //       console.log(info);
  //       this.setState({ options: info });
  //       console.log(this.state);
  //     });
  // }

  //functional methods
  setCategory = event => {
    this.setState({ category: "hello" });
    console.log(this.state.category);
  };

  render() {
    return (
      <div className="App">
        <SavedHeader />
      </div>
    );
  }
}

export default SavedListings;
