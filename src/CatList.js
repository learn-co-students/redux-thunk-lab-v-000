import React, { Component } from 'react';

class CatList extends Component {
  render() {
    return(
      <ul>
        {this.props.catPics.map(image => (
          <li key={image.id}>
            <img src={image.url} />
          </li>
        ))}
      </ul>
    );
  }
};

export default CatList;
