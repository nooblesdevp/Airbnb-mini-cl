import React from "react";
import { BrowserRouter as Router, Switch, Route } from "./react-router-dom";

import "./App.scss";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    //BEM
    <div className="app">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
