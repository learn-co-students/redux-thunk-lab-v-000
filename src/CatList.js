
import React, { Component } from 'react';

class CatList extends Component {

    render() {
      const cats = this.props.catPics.map(cat => <img key={cat.id} src={cat.url}/>)
      return(
        <div>
          <h2>rendering cats here</h2>
          {cats}
        </div>
      );
    }
}

export default CatList 