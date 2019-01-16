import React, { Component } from 'react';

class CatList extends Component {
  render() {

    const cats = this.props.catPics.map(function(cat, index){
      return (<li key={cat.index}><img src={cat.url}/></li>);
    })
    debugger;

    return (
      <div>
      {cats}
      </div>
    )
  }

}
export default CatList
