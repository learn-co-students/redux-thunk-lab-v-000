import React, { Component } from 'react';

export default class CatList extends Component {

  render() {
    
    const cats = this.props.catPics.map(pic => <img src={pic.url} alt="a cat pic"/>)

    return (
      <div>
        {cats}
      </div>
    )

  }
  
}