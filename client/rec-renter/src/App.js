import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import SignUp from "./pages/signup";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import PostListing from "./pages/postlisting";
import Carousel from "./components/carousel";
import SearchListings from "./pages/searchlistings";
import SavedListings from "./pages/saved";
// import News from "./components/news";
// import Weather from "./components/weather";

class App extends React.Component {
  state = { showModal: false };
  handleShowMessageClick = () => this.setState({ showModal: true });
  handleCloseModal = () => this.setState({ showModal: false });
  render() {
    return (
      <div>
        <div
          style={{
            position: "relative"
          }}
        >
          <Router>
            <Carousel />
            <NavBar />
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/postlisting" component={PostListing} />
                <Route
                  exact
                  path="/searchlistings"
                  component={SearchListings}
                />
                <Route exact path="/savedlistings" component={SavedListings} />
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
