import React, { Component } from "react";
class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.catPics.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt="catPic" width="100" height="100" />
          </div>
        ))}
      </div>
    );
  }
}

export default CatList;
