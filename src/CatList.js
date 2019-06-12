import React, { Component } from 'react';

class CatList extends Component {
    
    render() {
      console.log(this.props)
      const cats = this.props.catPics.map(cat => <img src={cat.url}/>)
      return(
        <div>
          <h2>rendering cats here</h2>
          {cats}
        </div>
      );
    }
}

export default CatList