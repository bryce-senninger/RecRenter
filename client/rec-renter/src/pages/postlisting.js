import React, { Component } from "react";
import PostHeader from "../components/postHeader";
import CategoryCard from "../components/categoryCards";
import options from "../options.json";
import CardWrap from "../components/cardWrap";
import "./style.css";

class PostListing extends Component {
  state = { options, category: undefined };

  //lifecycle methods
  //functional methods
  setCategory = id => {
    this.state.options.find((Param, i) => {
      if (Param.id === id) {
        this.setState({ category: options[i].category });
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
              handleIncrement={this.setCategory}
              key={option.id}
              id={option.id}
              name={option.name}
              image={option.image}
            />
          ))}
        </CardWrap>
      </div>
    );
  }
}

export default PostListing;
