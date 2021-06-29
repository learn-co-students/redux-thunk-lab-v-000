// write your CatList component here

import React, { Component } from 'react'

export default class CatList extends Component {
  render() {
    console.log(this.props.cats)
    return (
      <div>
          {this.props.catPics.map( pic => <img key={pic.id} src={pic.url}/> )}
      </div>
    )
  }
}