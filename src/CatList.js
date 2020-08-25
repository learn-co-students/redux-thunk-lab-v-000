import React, { Component } from 'react';

class CatList extends Component {

  renderCats = () => {
    return(
      this.props.cats.map(astro => <li key={cat.id}>{cat.name}</li>);
    )
  }

  render() {
    return(
      <ul>
        {this.renderCats()}
      </ul>
    );
  }
};

export default CatList;