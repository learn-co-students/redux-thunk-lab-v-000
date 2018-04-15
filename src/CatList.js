import React from 'react';

const CatList = (props) => {
  function listCats() {
    return props.catPics.map(catPic => {
      return (
        <img src={catPic.url} alt='cat'/>
      )
    })
  }
  return (
    <div>
      {listCats()}
    </div>
  )
}

export default CatList;
