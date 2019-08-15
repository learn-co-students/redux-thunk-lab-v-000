import React from 'react';

class CatList extends React.Component {
  render() {
    const catList = this.props.catPics.map((cat, index) =>
        <img src={cat.url} alt={cat.url} key={index} />
    )
    return (
      <div>{catList}</div>
    )
  }
}

export default CatList
