import React, { Component } from 'react'

export default class CatList extends Component {

  render() {
    const renderCatPics = this.props.catPics.map((catPic, idx) => <img key={idx} src={catPic.url}/>)
    return (
      <div>
        {renderCatPics}
      </div>
    )
  }
}
