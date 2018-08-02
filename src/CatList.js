import React, { Component } from 'react'
export default class CatList extends Component {
  render () {
    const cats = this.props.catPics.map((cat) => {
      return <img src={cat.url} id={cat.id} />
    })
    return (
      <React.Fragment>
        {cats}
      </React.Fragment>
    )
  }
}
