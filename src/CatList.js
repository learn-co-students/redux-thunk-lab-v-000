import React from 'react';

class CatList extends React.Component {

  render(){
    return (
      <div>
      {this.props.catPics.map((cat,key) =>
       <img src={cat.url} alt="cat" key={key}></img>
      )}
      </div>
    )
  }
}

export default CatList
