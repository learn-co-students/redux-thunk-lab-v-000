import React, { Component } from 'react';

class CatList extends Component {
  constructor() {
    super();
  }

  render () {
    const kitties = this.props.catPics.map(cat => {
      return <img src={cat.url} />
    })
    return (
      <div>
        <p>Cat List</p>
        {kitties}
      </div>
    )
  }
}

CatList.defaultProps = {
  catPics: [],
};

export default CatList;
