import React, { Component } from 'react';

class CatList extends Component {

  renderCats = () => this.props.catPics.map ((cat, id) => <img src={cat.url} alt={cat.id} /> )

  render() {
    // console.log("CatList",this.props);
    // console.log("CatList CatPics",this.props.catPics);
    return(
      <ul>
        {this.renderCats()}
      </ul>
    );
  }
};

export default CatList;