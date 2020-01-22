// write your CatList component here
import React, { Component } from 'react';


class CatList extends Component {

  render() {
    debugger
    let cats = this.props.catPics.map(cat => <img src={cat.url} key={cat.id} alt={cat.id} />)

    return (
    <div>
        {cats}
    </div>
    )
  }
}

export default CatList
