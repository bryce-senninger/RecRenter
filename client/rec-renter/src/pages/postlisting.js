import React, { Component } from "react";
import PostHeader from "../components/postHeader";
import CategoryCard from "../components/categoryCards";
import options from "../options.json";
import CardWrap from "../components/cardWrap";
import "./style.css";

class PostListing extends Component {
  state = { options: null, query: null };
  // state = { options: null };

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
        // console.log(info);
        this.setState({ options: info });
        console.log(this.state.options);
      });
  }
  // componentDidUpdate() {
  handleClick = id => {
    console.log(id);
    fetch("http://localhost:3001/api/category/:id", id)
      .then(function(result) {
        return result.json();
      })
      .then(info => {
        console.log(info);
        this.setState({
          query: ""
        });
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
  // }
  //functional methods
  // setCategory = event => {
  //   this.setState({ category: "hello" });
  //   console.log(this.state.category);
  // };

  render() {
    return (
      <div className="App">
        <PostHeader />
        <CardWrap>
          {this.state.options
            ? this.state.options.map(option => (
                <CategoryCard
                  // setCategory={this.setCategory}
                  handleClick={this.handleClick}
                  key={option._id}
                  id={option._id}
                  name={option.name}
                  subCategories={option.subcategories}
                  image={option.image}
                  category={option.name}
                  value={option.category}
                />
              ))
            : ""}
        </CardWrap>
      </div>
    );
  }
}

export default PostListing;
