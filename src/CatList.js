import React, { Component } from 'react';

class CatList extends Component {

  render() {

    const { catPics } = this.props;

    debugger 
    const catList = catPics.map(catPic =>
      <img key={catPic.id} src={catPic.url} alt={catPic.source_url}/>)
      return (
        <div>
          {catList}
        </div>
      )
  }
}

export default CatList
