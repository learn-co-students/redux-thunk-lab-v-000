import React from 'react';

const CatList = ({ catPics }) => {
  function listCats() {
    return catPics.map(catPic => {
      return (
        <div>
        <img src={catPic.url}/>
        </div>
      )
    })
  }
  // iterate over cat pics
  return (
    <div>
    {listCats()}
    </div>
  )
}

export default CatList;
