import React, { Component } from 'react';

class CatList extends Component {

  render() {
    return(
      <div>
        <li>
          {this.props.catPics.map(cat => <img src={cat.url} alt="Cats"/> )}
        </li>
      </div>
    );
  }
};

export default CatList;
