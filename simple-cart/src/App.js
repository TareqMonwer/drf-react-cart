import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/Products/products";
import "./App.css";

class App extends Component {
  state = {
    products: [
      { id: 1, count: 1, name: "Python For Hackers" },
      { id: 2, count: 1, name: "Code Compete" },
      { id: 3, count: 1, name: "Django For API's" },
      { id: 4, count: 1, name: "Road to REACT" },
    ],
  };

  handleResetCart = () => {
    const products = this.state.products.map((product) => {
      product.count = 0;
      return product;
    });
    console.log("reset from app.js");
    this.setState({ products });
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          products={this.state.products}
          handleResetCart={this.handleResetCart}
        />
        <Products />
      </React.Fragment>
    );
  }
}

export default App;
