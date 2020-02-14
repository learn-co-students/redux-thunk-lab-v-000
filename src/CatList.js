// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
  render() {
    // console.log(this.props)
    const { catPics } = this.props
    return (
      <ul>
        {catPics.map(cat => <li><img key={cat.id} src={cat.url} alt={cat.id}/></li>)}
      </ul>
    )
  }
}

export default CatList;
