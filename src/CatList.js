import React, { Component } from 'react';

class CatList extends Component {

  render() {
    console.log('in CatList - this.props', this.props)
    return (
      <div>

      </div >
    )
  }
}

export default CatList;


//CatList, which will receive the list of cat pics from App and render them in a series of <img> tags.