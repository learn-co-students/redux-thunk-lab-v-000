import React, { Component } from 'react';

export default class CatList extends Component {
  render() {
    return (
      <div>
       {this.props.catPics.map(picture => {
         return <img src={picture.url}/>
       })}
      </div>
    )
  }

}
