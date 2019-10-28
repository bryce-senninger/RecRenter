import React, { Component } from "react";
import PostHeader from "../components/postHeader";
import CategoryCard from "../components/categoryCards";
import CardWrap from "../components/cardWrap";
import "./style.css";
import PostForm from "../components/postForm";
import ThanksHeader from "../components/thanksHeader";

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
    email: "",
    currentCategory: null,
    currentSubcategory: null,
    currentStage: "category"
  };

  //lifecycle methods
  componentDidMount() {
    this.getCategories();
  }
  getCategories = () => {
    fetch("/api/category", {
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
    fetch("/api/category/" + id)
      .then(function(result) {
        return result.json();
      })
      .then(category => {
        console.log(category, "api resposnse");
        this.setState({
          currentCategory: category,
          currentStage: "form"
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
    this.setState({
      currentStage: "success"
    });
    let data = {
      title: this.state.title,
      description: this.state.description,
      location: this.state.location,
      imagePath: this.state.imagePath,
      email: this.state.email,
      price: this.state.price,
      subcategoryId: this.state.subcategoryId
    };

    fetch("/api/item", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(result => result.json(result))

      .then(item => {
        this.setState({
          currentSubcategory: item
        });
        console.log(this.state.currentSubcategory);
      })
      .catch(err => console.log(err));
  };

  postStage(stage) {
    switch (stage) {
      case "category":
        return (
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
        );
      case "form":
        return (
          <PostForm
            handleChange={this.handleChange}
            category={this.state.currentCategory}
            title={this.state.title}
            description={this.state.description}
            location={this.state.location}
            name={this.state.subcategoryId}
            price={this.state.price}
            imagePath={this.state.imagePath}
            handleSubmit={this.handleSubmit}
            email={this.state.email}
          />
        );
      case "success":
        return <ThanksHeader />;
      default:
        return;
    }
  }

  render() {
    return <div className="App">{this.postStage(this.state.currentStage)}</div>;
  }
}

export default PostListing;
