import React, { Component } from 'react'
import CatPic from './CatPic'

export default class CatList extends Component {

  render() {
    const renderKittyPics = () => this.props.catPics.map((pic, idx) => <div key={idx}><img src={pic.url} alt="Kitty!" /></div>)

    return (
      <div>
        {renderKittyPics()}
      </div>
    )
  }

}