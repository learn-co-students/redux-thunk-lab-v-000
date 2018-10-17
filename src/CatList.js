import React, { Component } from "react";

class CatList extends Component {
  render() {
    const cats = this.props.catPics.map(pic => (
      <img src={pic.url} alt="cat pic" />
    ));

    return <div>{cats}</div>;
  }
}

export default CatList;
