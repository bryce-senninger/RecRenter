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
    title: "",
    description: "",
    location: "",
    imagePath: "",
    price: "",
    subcategoryId: "",
    currentCategory: null
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
        console.log(category, "api resposnse");
        this.setState({
          currentCategory: category
        });
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };

  selectCategory = category => {
    this.setState({
      currentCategory: category
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    let data = {
      title: this.state.title,
      description: this.state.description,
      location: this.state.location,
      imagePath: this.state.imagePath,
      price: this.state.price,
      subcategoryId: this.state.subcategoryId
    };

    fetch("http://localhost:3001/api/item", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(result => result.json(result))

      .then(item => console.log(item))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        {this.state.currentCategory ? (
          <PostForm
            handleChange={this.handleChange}
            category={this.state.currentCategory}
            title={this.state.title}
            location={this.state.location}
            value={this.state.subcategoryId}
            price={this.state.price}
            imagePath={this.state.imagePath}
            // value={this.state.value}
            // item={this.state.item}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <>
            <PostHeader />
            <CardWrap>
              {this.state.options
                ? this.state.options.map(option => (
                    <CategoryCard
                      handleClick={this.handleClick}
                      key={option._id}
                      id={option._id}
                      name={option.name}
                      subCategories={option.subcategories}
                      image={option.image}
                      category={option.name}
                      value={option.category}
                      setCategory={this.selectCategory}
                    />
                  ))
                : ""}
            </CardWrap>
          </>
        )}
      </div>
    );
  }
}

export default PostListing;
