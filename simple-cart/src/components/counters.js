import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    products: [
      { id: 1, count: 1, name: "Python For Hackers" },
      { id: 2, count: 1, name: "Code Compete" },
      { id: 3, count: 1, name: "Django For API's" },
      { id: 4, count: 1, name: "Road to REACT" },
    ],
  };

  handleDelete = (productId) => {
    const products = this.state.products.filter(
      (product) => product.id !== productId
    );
    this.setState({ products });
  };

  render() {
    return (
      <div>
        {this.state.products.map((product) => {
          return (
            <Counter
              key={product.id}
              id={product.id}
              count={product.count}
              name={product.name}
              onDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
