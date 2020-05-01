import React, { Component } from "react";
import "./style/Counter.css";

class Counter extends Component {
  state = {
    id: this.props.id,
    count: this.props.count,
    name: this.props.name,
  };

  handleBadgeClasses = () => {
    if (this.state.counter === 0) {
      return "badge badge-danger mx-1";
    }
    return "badge badge-success mx-1";
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = (productId) => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      // Delete Product.
      this.props.onDelete(productId);
    }
  };

  formatCount = () => {
    return this.state.count === 0 ? "Zero" : this.state.count;
  };

  truncateName = (len) => {
    if (this.state.name.length > len - 3) {
      let newName = "";
      for (var i = 0; i < len; i++) {
        newName += this.state.name.charAt(i);
      }
      newName = newName.concat("...");
      return newName;
    }
    return this.state.name;
  };

  render() {
    return (
      <div className="cart__produc_item shadow">
        {this.truncateName(15)}
        <span className={this.handleBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-sm btn-light">
          +
        </button>
        <button
          onClick={() => this.handleDecrement(this.props.id)}
          className="btn btn-sm btn-danger"
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
