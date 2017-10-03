import React, { Component } from 'react';

class CatList extends Component {
  render(){
    return(
      <ul>
        {this.props.catPics.map(cat => <img src={`${cat.url}`}/>)}
      </ul>
    )
  }
}

export default CatList;
