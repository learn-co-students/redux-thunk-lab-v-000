import React, { Component } from 'react'

export default class CatList extends Component {
  renderCatPics = () => this.props.catPics.map(catPic => <img key={catPic.id} alt={""} src={catPic.url}></img>)

  render() {
    return(
      <div>
        {this.renderCatPics()}
      </div>
    )
  }
}
