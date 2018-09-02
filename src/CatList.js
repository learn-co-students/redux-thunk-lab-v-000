import React, { Component } from 'react';


class CatList extends Component {
  render() {
    console.log(this.props.catImage)
    return (
      <div><img src={this.props.catImage} /></div>
    )
  }
}

export default CatList;

