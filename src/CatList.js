import React, { Component } from "react";

class CatList extends Component {
  render() {
    let cats = this.props.catPics.map(catPic => (
      <img src={catPic.url} alt={catPic.id} />
    ));

    return <div>{cats}</div>;
  }
}

export default CatList;
