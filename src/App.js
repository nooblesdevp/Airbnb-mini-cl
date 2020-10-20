import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
