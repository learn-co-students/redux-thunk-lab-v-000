import React, { Component } from 'react';

class CatList extends Component {

  renderCatList = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt=""/>)
  }

  render() {
    console.log('Catlist props', this.props);
    return (
      <div>
        {this.renderCatList()}
      </div>
    )
  }
}

export default CatList;
