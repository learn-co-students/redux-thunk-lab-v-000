import React, { Component } from 'react'

class CatList extends Component {
  render(){
    return(
      <div>
        {this.props.catPics.map((cat, idx) => <img key={idx} src={cat.url} alt="cat"/>)}
      </div>
    )
  }
}

export default CatList
