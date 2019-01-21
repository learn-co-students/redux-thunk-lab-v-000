import React, {Component} from 'react'

export default class CatList extends Component {

 renderCats = () => {
    return this.props.catPics.map( (catPic, idx) => {
      return <img key={catPic.id} src={catPic.url}></img>
    })
  }
  render () {
    return (
      <div>
        {this.renderCats()}
      </div>
    )
  }

}
