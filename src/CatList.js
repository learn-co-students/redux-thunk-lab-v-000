import React, { Component } from 'react';

class CatList extends Component {
  render() {
    const catPics = this.props.catPics.map((catPic, index) => {
      return <img key={index} src={catPic.url} />
    })

    return (
      <div className="CatList">
        {catPics}
      </div>
    )
  }
}

export default CatList;
