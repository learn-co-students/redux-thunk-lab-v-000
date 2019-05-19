import React, { Component } from 'react';

class CatList extends Component {

  render() {
    const cats = this.props.catPics.map((pic, index) => <li key={index}><img src={pic} alt="cat-pic"/></li>)

    return(
      <div>{cats}</div>
    )
  }
}

export default CatList