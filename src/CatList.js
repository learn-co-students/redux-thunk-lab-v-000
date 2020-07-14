import React, { Component } from 'react';

class CatList extends Component {

  renderCats = () => this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.source_url} />);

  render() {
    return (
      <div>
        {this.props.loading ?  <h1>"Loading..."</h1> : this.renderCats()}
      </div>
    );
  }
};

export default CatList;