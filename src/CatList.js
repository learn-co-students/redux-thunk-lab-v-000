import React from 'react';

const CatList = ({ catPics }) => {
  const renderCatPics = catPics.map(catPic => <img src={ catPic.url } />)

  return (
    <div>
      { renderCatPics }
    </div>
  )
}
export default CatList;



