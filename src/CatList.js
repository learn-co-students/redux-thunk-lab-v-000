import React, { Component } from 'react';

class CatList extends Component {
  
  render() {
    const { catPics } = this.props;

    return(
      <div>
      	{catPics.map( catPics => <img key={catPics.id} src={catPics.url} alt={catPics.id}></img>)}
      </div>
    );
  }
};

export default CatList;
