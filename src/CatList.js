import React, { Component } from 'react';

export default class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.catPics.map(catPic => <p key ={ catPic.id }><img src={ catPic.url } alt={ catPic.id } /></p>)}
      </div>
    )
  }
}
