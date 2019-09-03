import React, { Component } from 'react';

export default class CatList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.catPics.map((cat, index) => <img key={index} src={cat.url} alt='kitty' />)}
        </ul>
        <p>CatList Page</p>
      </div>
    )
  }
}