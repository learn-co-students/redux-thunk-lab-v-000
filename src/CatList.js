import React from 'react';

class CatList extends React.Component {
  render() {
    const cats = this.props.catPics.map((pic, index) => <img key={index} src={pic.url} alt={`cat-${index}`} />)
    return(
      <div>
       {cats}
      </div>
    )
  }
}

export default CatList;
