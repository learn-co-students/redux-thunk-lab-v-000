import React, { Component } from 'react';

export default class CatList extends Component {
  renderCats = () => {
    return (this.props.catPics.map((cat, idx) => <img src={cat.url} alt='catpic' key={idx}/>))
  }

  render() {
    return (
      <div>
        {this.renderCats()}
      </div>
    )
  }
}
