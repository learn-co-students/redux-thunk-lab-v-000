import React, { Component } from 'react'

export default class CatList extends Component {


  render(){
    const renderCats = this.props.catPics.map(picture=>
        <li>
          <img src={picture.url} alt="cat" />
        </li>)

    return(
      <div>
        {renderCats}
      </div>
    )
  }
}