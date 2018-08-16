import uuid from 'uuid'
import React, {Component} from 'react';

class CatList extends React.Component {
  render() {

    const catMap = this.props.catPics.map(pic => {
      return <img key={uuid()} src={pic.url} alt={pic.id} />
    })

    return (
      <div>
        {catMap}
      </div>
    );
  }
}

export default CatList

