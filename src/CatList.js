import React from 'react';

const CatList = ({ catPics }) => {
  const renderCats = catPics.map(catPic => <img key={catPic.id} src={catPic.url} /> );
  
  return (
    <div>
        {renderCats}
    </div>
  );
};

export default CatList;