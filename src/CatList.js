import React, { Component } from 'react'

class CatList extends Component {

  renderCatList = () => {
    return this.props.catPics.map(catPic => <img src={catPic.url} alt={catPic.id} key={catPic.id} />)
  }

  render(){
    return(
      <div>
        <ul>
         {this.renderCatList()}
        </ul>
      </div>
    )
  }
}


export default CatList;
