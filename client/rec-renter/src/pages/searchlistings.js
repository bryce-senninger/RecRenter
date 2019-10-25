import React, { Component } from "react";
import SearchHeader from "../components/searchHeader";
import CategoryCard from "../components/categoryCards";
import SubcategoryCard from "../components/subcategoryCard";
import options from "../options.json";
import CardWrap from "../components/cardWrap";
import "./style.css";
// import PostForm from "../components/postForm";

class SearchListings extends Component {
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
    },
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
        {this.state.currentCategory ? (
          // <PostForm
          //   handleChange={this.handleChange}
          //   category={this.state.currentCategory}
          //   // postTitle={this.state.title}
          //   // location={this.state.location}
          //   // subcategory={this.state.subcategories}
          //   // price={this.state.price}
          //   // imagePath={this.state.imagePath}
          //   item={this.state.item}
          //   handleSubmit={this.handleSubmit}
          // />
          <CardWrap>
            {this.state.currentCategory.subcategories.map(option => (
              <SubcategoryCard
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
            ))}
          </CardWrap>
        ) : (
          <>
            <SearchHeader />
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

export default SearchListings;
