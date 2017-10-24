import React, { Component } from 'react'

class CatList extends Component {

  render() {

    const cats = this.props.catPics.map(cat => <img role="presentation">{cat.img}</img>);

    return(
      <div>
        {cats}
      </div>
    );
  }
};

export default CatList
