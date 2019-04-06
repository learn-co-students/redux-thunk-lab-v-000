import React, { Component } from 'react';

class CatList extends Component {
  renderCats = () => {
    return this.props.catPics.map(catPic => <img src={catPic.url} key={catPic.id} />)
  }

  render() {
    return(
      <div>
        {this.renderCats()}
      </div>
    );
  };
}; // CatList

export default CatList;
