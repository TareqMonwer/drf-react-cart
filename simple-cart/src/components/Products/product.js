import React, { Component } from "react";

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <React.Fragment>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <a href="#">
              <img
                className="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
              />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">{product.name}</a>
              </h4>
              <h5>${product.price}</h5>
              <p className="card-text">{product.details}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{product.ratings}</small>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
