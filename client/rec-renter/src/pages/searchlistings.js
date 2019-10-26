import React, { Component } from "react";
import SearchHeader from "../components/searchHeader";
import CategoryCard from "../components/categoryCards";
import SubcategoryCard from "../components/subcategoryCard";
import CardWrap from "../components/cardWrap";
import SearchCard from "../components/searchCards";
import SearchCardWrap from "../components/searchCardWrap";
import "./style.css";

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
      email: "",
      subcategoryId: null
    },
    currentCategory: null,
    searchedSub: null,
    currentPage: "categories",
    itemMatches: null
  };

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
      })
      .then(category => {
        console.log(category, "api resposnse");
        this.setState({
          currentCategory: category,
          currentPage: "subcategories"
        });
        console.log(this.state.currentCategory);
        console.log(this.state.currentPage);
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
  subCategoryHandleClick = subcategoryId => {
    fetch("http://localhost:3001/api/item/" + subcategoryId)
      .then(function(result) {
        return result.json();
      })
      .then(response => {
        console.log(response, "--Item search--");
        this.setState({
          itemMatches: response
        });
      })
      .then(e => {
        this.setState({
          currentPage: "searchresults"
        });
        console.log(this.state.itemMatches, "Item matches in state");
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  renderSwitch(currentPage) {
    switch (currentPage) {
      case "categories":
        return (
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
        );
      case "subcategories":
        return (
          <>
            <SearchHeader />
            <CardWrap>
              {this.state.currentCategory.subcategories.map(option => (
                <SubcategoryCard
                  subCategoryHandleClick={this.subCategoryHandleClick}
                  key={option._id}
                  id={option._id}
                  name={option.name}
                  subCategories={option.subcategories}
                  image={option.image}
                />
              ))}
            </CardWrap>
          </>
        );
      case "searchresults":
        return (
          <SearchCardWrap>
            {this.state.itemMatches.map(matches => (
              <SearchCard
                title={matches.title}
                price={matches.price}
                location={matches.location}
                description={matches.description}
                email={matches.email}
              />
            ))}
          </SearchCardWrap>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="App">{this.renderSwitch(this.state.currentPage)}</div>
    );
  }
}

export default SearchListings;
