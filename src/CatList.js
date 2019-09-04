import React from 'react';

const CatList = ({ catPics }) => {
  const renderCats = catPics.map(pic =>
    <img key={pic.id} src={pic.url}></img>
  )

  return (
    <div>
      <h2>Cats</h2>
      {renderCats}
    </div>
  )
}

export default CatList;
