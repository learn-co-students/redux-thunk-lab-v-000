import React, { Component } from "react";

class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.catPics.map((catPic) => {
          return <img key={catPic.id} src={catPic.url} alt="cat" />;
        })}
      </div>
    );
  }
}

export default CatList;
