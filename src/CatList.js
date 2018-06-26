import React from 'react';

class CatList extends React.Component {

  render() {
    // debugger;
    const cats = this.props.catPics.map(cat => <img key={cat.id} src={cat.url} role='presentation' />);

    return(
      <div>
        {cats}
      </div>
    )
  }
}

export default CatList
