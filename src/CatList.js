import React, { Component } from 'react'

export default class CatList extends Component {


  render() {
    debugger
    const displayCatPics = this.props.catPics.map(catPic => <li key={catPic.id}><img src={catPic.url} alt="catPic" /></li>)
    return(
      <div>
        <ul>
          {displayCatPics}
        </ul>
      </div>
    )
  }
}
