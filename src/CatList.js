import React from 'react';



class CatList extends React.Component {
  render() {
    console.log(this.props.catPics)
    const cats = this.props.catPics.map(cat =>
    <img src={cat.url} alt={cat.url} />)
    return (
      <div>
        {cats}
      </div>  
    )
  }
}

export default CatList
