import React, { Component } from 'react';

class CatList extends Component {

  render() {
    const cats = this.props.catPics.map((pic) =>
      <img key={pic.id} src={`${pic.url}`} alt="cat" />
    );

    return (
      <div>
        <h3>CatList</h3>
        {cats}
      </div>
    )
  }
}

// You can't use map() on 'undefined', strings, nils, or numbers.
// That will throw an exception (error).
// When using map(), set defaultProps to an empty array to make sure
// map() never encounters the
// Undefined Function Exception, a.k.a. "Cannot read property 'map' of undefined."

CatList.defaultProps = { catPics: [] }

export default CatList
