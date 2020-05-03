import React, { Component } from "react";
import Counters from "./counters";
import "./style/Cart.css";

class Cart extends Component {
  onReset = () => {
    this.props.handleResetCart();
  };

  render() {
    return (
      <React.Fragment>
        <div className="cart shadow-lg hide">
          <h2 className="cart__title">SIMPLE CART</h2>
          <div className="cartbox">
            <div className="cartbox__box">5 Products</div>
            <div className="cartbox__box">$56</div>
            <div className="cartbox__box">$6 VAT</div>
          </div>

          {/* Cart items */}
          <div className="cart__product_wraper">
            <Counters />
            <button
              onClick={this.onReset}
              className="btn btn-block btn-dark btn-sm shadow-lg"
            >
              Reset Cart
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
