import React, { Component } from 'react';

class CatList extends Component {

  render() {
      return(
          <div>
           { this.props.catPics.map(pic => (<img src={pic.url}/>)) }
          </div>
      )
  }
};

export default CatList;
