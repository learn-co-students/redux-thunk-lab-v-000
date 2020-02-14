// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
  render() {
    // console.log(this.props)
    const { catPics } = this.props
    return (
      <ul>
        {catPics.map(catPic => <li><img src={catPic.url} /></li>)}
      </ul>
    )
  }
}

export default CatList;
