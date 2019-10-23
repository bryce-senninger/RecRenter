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
  setCategory = event => {
    this.setState({ category: "hello" });
    console.log(this.state.category);
  };

  render() {
    return (
      <div className="App">
        <PostHeader />
        <CardWrap>
          {this.state.options.map(option => (
            <CategoryCard
              setCategory={this.setCategory}
              key={option.id}
              id={option.id}
              name={option.name}
              image={option.image}
              category={option.category}
              value={option.category}
            />
          ))}
        </CardWrap>
      </div>
    );
  }
}

export default PostListing;
