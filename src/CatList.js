import React, { Component } from 'react';

export default class CatList extends Component {
  render() {
    const cats = this.props.catPics.map(pic => <img src={pic.url} alt="kitteh"/>)
    return (
      <div> {cats} </div>
    )
  }
}
// CatListwill receive the list of cat pics from App and render them
// in a series of <img> tags.
