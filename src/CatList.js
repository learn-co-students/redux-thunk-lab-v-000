// write your CatList component here
import React, { Component } from 'react';

class CatList extends React.Component {
  renderCatPics = () => {
    return this.props.catPics.map(cat => {
      return <img src={cat.url}></img>
    })

  }

  render(){

    return (
      <div>
      {this.renderCatPics()}
      </div>
    )
  }

}
export default CatList;
