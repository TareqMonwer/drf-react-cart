import React, { Component } from "react";

class MyComponent extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }
  gmsg = "Stay Home";
  imageURL = "https://i.picsum.photos/id/96/200/300.jpg";
  render() {
    return (
      <div>
        <img src={"https://i.picsum.photos/id/96/200/300.jpg"}></img>
        <h1>{this.gmsg}</h1>
        <button>Change World</button>
      </div>
    );
  }
}

export default MyComponent;
