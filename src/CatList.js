import React, { Component } from 'react';
// import App from './App'

class CatList extends Component {

  render() {
    const catPictures = this.props.catPics

 console.log(catPictures)
  const catList = catPictures.map((catPic) =>
      <img src={catPic.url} ></img>
    )

    return (
      <ul>
          {catList}
      </ul>
      )
    }

};

export default CatList;
