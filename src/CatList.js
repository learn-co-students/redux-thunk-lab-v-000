import React, { Component } from "react";

class CatList extends Component {
  cats = () =>
    this.props.catPics.map(cat => {
      return <img key={cat.id} src={cat.url} />;
    });
  render() {
    return <div>{this.cats()}</div>;
  }
}

export default CatList;
