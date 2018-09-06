import React, { Component } from 'react';


class CatList extends Component {
  render() {
    return(
      <div>
        {this.props.catPics.map(pic => {
          return (
            <img src={pic.url} alt="CatPic"></img>
          )
        })}
      </div>
    );
  }
};



export default CatList;
