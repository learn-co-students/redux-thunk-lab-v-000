
import React, { Component } from 'react';

class CatList extends Component {

  render() {
    return(
      <div>
        {this.props.catPics.map((image, i) =>
          <div key={i}>
            <img src={image.url} alt="catPic"></img>
          </div>)}
      </div>
    )
  }
}


export default CatList