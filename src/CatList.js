import React, { Component } from 'react';

class CatList extends Component {
  renderCats() {
    return (
      <div>
        {this.props.catPics.map(cat => {
          return (
            <img key={cat.id} src={cat.url} alt="a kitty cat" />
          )
        })}
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.renderCats()}
      </div>
    )
  }
}

export default CatList;
