import React, { Component } from 'react';

class CatList extends Component {

  render() {
    const catPics = this.props.catPics.map(pic => <img src={pic.url} key={pic.url} alt='cat'/>)

    return (
      <div>
        {catPics}
      </div>
    );
  }
};

export default CatList;
