import React from 'react';

const CatList = ({ catPics }) => {
  const renderPics = catPics.map(cat =>
    <img src={cat.url}/>
  );

  return (
    <div>
      {renderPics}
    </div>
  );
};

export default CatList;
