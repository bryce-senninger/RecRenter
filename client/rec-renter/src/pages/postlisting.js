import React, { Component } from "react";
import PostHeader from "../components/postHeader";
import CategoryCard from "../components/categoryCards";
// import options from "../options.json";
import CardWrap from "../components/cardWrap";
import "./style.css";
import PostForm from "../components/postForm";

class PostListing extends Component {
  state = {
    options: null,
    category: null,
    item: {
      title: "",
      description: "",
      location: "",
      imagePath: "",
      price: "",
      subcategoryId: ""
    }
  };

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
    })
      .then(function(result) {
        return result.json();
      })

      .then(info => {
        this.setState({ options: info });
      })
      .catch(err => console.log(err));
  };

  handleClick = id => {
    fetch("http://localhost:3001/api/category/" + id)
      .then(function(result) {
        return result.json();
        // console.log(result);
      })
      .then(category => {
        // console.log(category);
        this.setState({
          category: category,
          options: null
        });
        console.log(this.state.category);
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    fetch("http://localhost:3001/api/item", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.state.item)
    })
      .then(function(result) {
        return result.json();
      })

      .then(item => console.log(item));
  };

  render() {
    return (
      <div className="App">
        <PostHeader />
        <CardWrap>
          {this.state.options
            ? this.state.options.map(option => (
                <CategoryCard
                  handleClick={this.handleClick}
                  key={option._id}
                  id={option._id}
                  name={option.name}
                  // subCategories={option.subcategories}
                  image={option.image}
                  category={option.name}
                  value={option.category}
                />
              ))
            : ""}
        </CardWrap>
        <PostForm
          handleChange={this.handleChange}
          // postTitle={this.state.title}
          // location={this.state.location}
          // subcategory={this.state.subcategoryId}
          // price={this.state.price}
          // imagePath={this.state.imagePath}
          // description={this.state.description}
          item={this.state.item}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default PostListing;
