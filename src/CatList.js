import React, { Component } from 'react';
import Restaurant from './Restaurant';

class CatList extends Component {
  
  render() {
    const { store } = this.props;
    const cats = store.getState().cats.map((cat, index) => {
      return (<img> <key={index} cat={cat} store={store} /> </img>)
    });
    
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;