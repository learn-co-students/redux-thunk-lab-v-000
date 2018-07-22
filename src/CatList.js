import React, {Component} from 'react'

export default class CatList extends Component {
  render(){
    const imageElements = this.props.catPics.map((picObj, index) => {
      return <img key={index} src={`${picObj.url}`} alt="Cat" />
    })
    return(
      <div>
        <h1>Cat List</h1>
        {imageElements}
        </div>
    )
  }
}