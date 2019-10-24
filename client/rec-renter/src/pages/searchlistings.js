import React, { Component } from "react";
import SearchHeader from "../components/searchHeader";
import CategoryCard from "../components/categoryCards";
import options from "../options.json";
import CardWrap from "../components/cardWrap";
import "./style.css";
import PostForm from "../components/postForm";

class SearchListings extends Component {
  // state = { options, category: undefined };
  state = { options };

  //lifecycle methods
  // componentDidMount() {
  //   fetch("http://localhost:3001/api/category", {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json"
  //     }
  //     // body: JSON.stringify(this.state)
  //   })
  //     .then(function(result) {
  //       return result.json();
  //     })

  //     .then(info => {
  //       console.log(info);
  //       this.setState({ options: info });
  //       console.log(this.state);
  //     });
  // }

  //functional methods
  setCategory = event => {
    this.setState({ category: "hello" });
    console.log(this.state.category);
  };

  render() {
    return (
      <div className="App">
        <SearchHeader />
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

export default SearchListings;
