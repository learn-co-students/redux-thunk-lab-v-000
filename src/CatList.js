import React from 'react'

export default class CatList extends React.Component {

  renderCats = () => {
    return this.props.catPics.map( (catPic, idx) => {
      return <img key={catPic.id} src={catPic.url}></img>
    })
  }

  render(){
    return (
      <div className="CatList">
        {this.renderCats()}
      </div>
    )
  }
}