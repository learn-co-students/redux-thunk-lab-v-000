import React from 'react';

const CatList = ({ catPics }) => {

  const renderCats = catPics.map(cat =>
    <div key={cat.id}>
      <img src={cat.url} alt={`Cat-${cat.id}`} />
    </div>
  )

  return(
    <div>
      {renderCats}
    </div>
  );
};

export default CatList;
