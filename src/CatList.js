import React, { Component } from 'react';


class CatList extends Component {

  render() {
    console.log(this.props.catPics[0])
    let cats = this.props.catPics.map((cat,index) => <li key={index}>
      <img src={cat.url}  width="100" height="100"/>
    </li>)
    return(
      <ul>
        {cats}
      </ul>
    );
  }
};

export default CatList;
