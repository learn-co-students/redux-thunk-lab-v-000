import React, { Component } from 'react';

class CatList extends Component {
  render(){

    const pics = this.props.catPics.map((cat) =>{
      return <img src={cat.url} />
    })

    return (
      <div>
        {pics}
      </div>
    )
  }
}


export default CatList
