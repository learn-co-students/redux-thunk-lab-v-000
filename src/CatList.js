import React, { Component } from 'react'

export default class CatList extends Component {

  generateCats = () => {
    //console.log("Is there anything in this.props.catPics?", this.props.catPics);
    return this.props.catPics.length > 1 ? this.props.catPics.map((cat, index) => (
      <li key={index}><img src={cat.url} alt="cat" /></li>
    )) : <h3>{this.props.catPics[0]}</h3>
  }
  render() {
    return (
      <div>
        <ul>
          {this.generateCats()}
        </ul>
      </div>
    )
  }
}
