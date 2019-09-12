import React, { Component } from 'react';

class CatList extends Component {

  render() {
    const { catPics } = this.props
    const catPicsArray = catPics.map((img) => {
      return < img src={img.url} alt={img.id} />
    })
    return (
      < div >
        <li>{catPicsArray}</li>
        <p>hey from catlist</p>
      </div >
    )
  }
}

export default CatList;

