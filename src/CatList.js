import React, { Component } from 'react';

export default class CatList extends Component {

  renderPics = () => this.props.catPics.map((pic) => <img src={pic.url} />)

  render() {
    return(
      <div>
        {this.renderPics()}
      </div>
    );
  }
};
