import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import SignUp from "./pages/signup";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import PostListing from "./pages/postlisting";
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
            <NavBar />
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/postlisting" component={PostListing} />
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
