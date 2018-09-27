import React, { Component } from 'react';

class CatList extends Component {

  render() {
    return (
      <div>
        <li>
          {this.props.catPics.map(cat => <img src={cat.url} />)}
        </li>
        
      </div>
    );
  }

};

export default CatList;
