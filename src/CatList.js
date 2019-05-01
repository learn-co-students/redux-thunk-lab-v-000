import React, { Component } from 'react';

class CatList extends Component {

  render() {
    return(
      <div>
        {this.props.catPics.map(catPic => {
          return <img src={catPic.url} alt={catPic.id} key={catPic.id}/>
        })}
      </div>
    );
  }
};

export default CatList;
