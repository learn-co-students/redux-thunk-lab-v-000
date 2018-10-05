import React, { Component } from 'react'

class CatList extends Component {
  render() {
    const renderCatPics = this.props.catPics.map(catPic => <img src={catPic} alt='cat' />)

    return (
      <div>
        {renderCatPics}
      </div>
    )
  }
}

export default CatList
