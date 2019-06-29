import React, { Component } from 'react';
class CatList extends Component {

  renderCats = () => this.props.catPics.map((cat) => <img alt="cat" key={cat.id} src={cat.url}/>)

  render() {
    return (
      <div>
        {this.renderCats()}
      </div>
    );
  }

}

export default CatList;
