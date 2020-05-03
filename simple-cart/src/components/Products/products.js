import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  state = {
    products: [
      {
        id: 23,
        name: "Linux Commandline Basic",
        price: "40",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        ratings: "★ ★ ★ ★ ☆",
      },
      {
        id: 24,
        name: "Software Craftmenship",
        price: "60",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        ratings: "★ ★ ★ ★ ☆",
      },
      {
        id: 25,
        name: "Learning React",
        price: "40",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        ratings: "★ ★ ★ ★ ☆",
      },
      {
        id: 26,
        name: "Django 2 By Examples",
        price: "30",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        ratings: "★ ★ ★ ★ ☆",
      },
      {
        id: 27,
        name: "Designing RESTful APIs",
        price: "40",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        ratings: "★ ★ ★ ★ ☆",
      },
      {
        id: 28,
        name: "Art of Computer Programming",
        price: "100",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        ratings: "★ ★ ★ ★ ☆",
      },
    ],
  };

  render() {
    const products = this.state.products;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row py-5 justify-content-center">
            <div className="col-lg-12">
              <div className="row">
                {products.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
