import React from 'react'

const CatList = ({catPics}) => {
  const renderCats = catPics.map(cat =>
    <img key={cat.id}></img>
);

return (
  <div>
    {renderCats}
  </div>
);
};

export default CatList;
