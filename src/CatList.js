import React, { Component } from 'react';
import Cat from './Cat';

class CatList extends Component {
  
  render() {
    
    const cats = this.props.catPics.map((picture, index) => {
      return (<img src={picture} /> )
    });
    
    return(
      <ul>
        {cats}
      </ul>
    );
  }
};



export default CatList;