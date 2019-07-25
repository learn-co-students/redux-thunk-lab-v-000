    
import React, { Component } from 'react';

class CatList extends Component {

  renderCats = () => {
    return this.props.catPics.map(catPic => <img src={catPic.url} key={catPic.id} alt='cat'/>)
  }

  render() {
    return(
      <div>
        {this.renderCats()}
      </div>
    );
  }
};

export default CatList;