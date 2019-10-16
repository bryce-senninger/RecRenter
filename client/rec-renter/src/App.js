import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
// import News from "./components/news";
// import Weather from "./components/weather";

const App = () => (
  <Router>
    <NavBar />
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
    <Footer />
  </Router>
);

export default App;
