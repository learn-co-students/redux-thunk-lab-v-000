import React, { Component } from 'react';

class CatList extends Component {

  render() {
    const cats = this.props.catPics.map((pic) =>
      <img key={pic.id} src={`${pic.url}`} alt="cat" />
    );

    return (
      <div>
        <h3>CatList</h3>
        {cats}
      </div>
    )
  }
}

CatList.defaultProps = { catPics: [] }
export default CatList
