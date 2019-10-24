import React, { Component } from "react";
import PostHeader from "../components/postHeader";
import CategoryCard from "../components/categoryCards";
// import options from "../options.json";
import CardWrap from "../components/cardWrap";
import "./style.css";
import PostForm from "../components/postForm";

class PostListing extends Component {
  state = { options: null, query: null };
  // state = { options: null };

  //lifecycle methods
  componentDidMount() {
    this.getCategories();
  }
  getCategories = () => {
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
        // console.log(this.state.options);
      })
      .catch(err => console.log(err));
  };

  // componentDidUpdate() {
  handleClick = function(id, event) {
    // console.log(this.state.query);
    fetch("http://localhost:3001/api/category/" + id)
      .then(function(result) {
        return result.json();
        // console.log(result);
      })
      .then(category => {
        console.log(category);
        // this.setState({
        // query: ""
        // });
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
                  key={option.id}
                  id={option.id}
                  name={option.name}
                  subCategories={option.subcategories}
                  image={option.image}
                  category={option.name}
                  value={option.category}
                />
              ))
            : ""}
        </CardWrap>
        <PostForm />
      </div>
    );
  }
}

export default PostListing;
