import React, { Component } from 'react';

class CatList extends Component {

  render() {
    return (
      <div>
        {this.props.catPics.pictures.map(picture => {
          return <p><img src={picture.url}/></p>
        })}
      </div>
    );
  }
};

export default CatList;
