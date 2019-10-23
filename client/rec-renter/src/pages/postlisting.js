import React, { Component } from "react";
import PostHeader from "../components/postHeader";
import CategoryCard from "../components/categoryCards";
import options from "../options.json";
import CardWrap from "../components/cardWrap";
import "./style.css";

class PostListing extends Component {
  // state = { options, category: undefined };
  state = { options };

  //lifecycle methods
  componentDidMount() {
    fetch("http://localhost:3001/api/category", {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
      // body: JSON.stringify(this.state)
    })
      .then(function(result) {
        return result.json();
      })

      .then(info => {
        console.log(info);
        this.setState({ options: info });
        console.log(this.state);
      });
  }

  //functional methods
  setCategory = id => {
    this.state.options.find((p, i) => {
      if (p.id === id) {
        let category = options[i];

        this.setState({ category });
        console.log(this.state.category);
      }
      return false;
    });
  };

  render() {
    return (
      <div className="App">
        <PostHeader />
        <CardWrap>
          {this.state.options.map(option => (
            <CategoryCard
              // onClick={this.setCategory}
              key={option.id}
              id={option.id}
              name={option.title}
              image={option.image}
            />
          ))}
        </CardWrap>
      </div>
    );
  }
}

export default PostListing;
