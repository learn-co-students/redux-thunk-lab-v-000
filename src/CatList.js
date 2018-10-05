import React, { Component } from 'react';

class CatList extends Component {
  render() {
    return (
      <div>
        {this.renderCats()}
      </div>
    )
  }

  renderCats = () => {
    return this.props.catPics ? this.props.catPics.map( cat =>
    <img key={cat.id} src={cat.url} alt={cat.id} />) : null
  }
}
export default CatList;
