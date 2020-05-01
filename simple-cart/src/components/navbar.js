import React, { Component } from "react";
import Cart from "./cart";
import Navbar from "react-bootstrap/Navbar";

class NavBar extends Component {
  showCart = () => {
    document.querySelector(".cart").classList.toggle("hide");
  };

  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Simple Cart</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <button onClick={this.showCart} className="btn btn-danger btn-sm">
                Cart
              </button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Cart />
      </React.Fragment>
    );
  }
}

export default NavBar;
