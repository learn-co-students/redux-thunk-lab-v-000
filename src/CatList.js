import React, { Component } from 'react'

export default class CatList extends Component {
  render() {
    const catPics = this.props.catPics.map(pic => <img key={pic.id} src={pic.url} />)
    return(
      <div>
        {catPics}
      </div>
    )
  }
}
