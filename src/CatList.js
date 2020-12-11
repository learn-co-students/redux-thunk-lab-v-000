import React, { Component } from 'react';


class CatList extends Component {

  renderCats = () => {

    return this.props.catPics.map(cat => <div key={cat.id}> <img src={cat.url} alt=""/> </div>)
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
