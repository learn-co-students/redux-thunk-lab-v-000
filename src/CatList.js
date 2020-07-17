import React, { Component } from 'react';

export default class catList extends Component {

  renderCatPic = (catPic) => {
    return (
      <li key={catPic.id}><img src={catPic.url} alt="Cat Pic" /></li>
    )
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.catPics.map(catPic => this.renderCatPic(catPic))}
        </ul>
      </div>
    )
  };

}