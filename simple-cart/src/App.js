import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/Products/products";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Products />
      </React.Fragment>
    );
  }
}

export default App;
