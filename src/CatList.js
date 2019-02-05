import React, { Component } from 'react';

export default class CatList extends Component {
  render(){
    return(
      <div>
        {this.props.catPics.map((pic, index) =>
          <img key={index} src={pic}/>
        )}
      </div>
    )
  }
}
