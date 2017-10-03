import React, { Component } from 'react';

class CatList extends Component {
  render(){
    const pics = catPics.map(cat => <img src={`${cat.url}`}/>)
    return(
      {pics}
    )
  }
}

export default CatList;
