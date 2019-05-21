import React, { Component } from "react";

class CatList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return this.props.catPics.map(el => <img src={el.url} key={el.id} />);
  }
}

export default CatList;
