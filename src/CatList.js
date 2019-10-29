// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {

  listOfCats = () => {
    return this.props.catPics.map(cat => <img src={cat.url} key={cat.id} />)
  }


  render() {
    return this.props.loading ? <div>Loading...</div> : <div> {this.listOfCats()} </div>; 

  }

}
export default CatList;
