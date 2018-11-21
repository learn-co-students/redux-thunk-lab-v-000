import React, { Component } from 'react';

class CatList extends Component {
  debugger


  render() {
    let catList = () => this.props.catPics.map( (cat, i) =>
      <div><img key={cat.id} src={cat.url}/></div>
    )

    return (
      <div>
      {catList()}
      </div>
    )
  }
}

export default CatList
