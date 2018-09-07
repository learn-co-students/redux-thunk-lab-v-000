import React, { Component } from "react";
class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.catPics.map((image, idx) => (
          <div key={idx}>
            <img src={image.url} alt="catPic" />
          </div>
        ))}
      </div>
    );
  }
}

export default CatList;
