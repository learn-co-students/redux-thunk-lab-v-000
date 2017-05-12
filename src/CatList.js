import React from 'react';

const CatList = (props) => {
  function buildCats() {
    return props.catPics.map((pic) => {
      return (
        <img src={pic.url} alt="A kitty cat" />
      )
    });
  }

  return (
    <div className="CatList">
      {buildCats()}
    </div>
  )
}


export default CatList;
