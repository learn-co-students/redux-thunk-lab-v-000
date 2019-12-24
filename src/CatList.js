import React, { Component } from 'react';

class CatList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.catPics.map(c => <li key={c.id}><img alt="random cat pic" src={c.url}/> </li>)}
        </ul>
      </div>
    )
  }
}

export default CatList;
