import React from 'react';

const CatList = ({ catPics }) => {
  const renderCats = catPics.map((cat, i) =>
    <img role="presentation" key={i}>{cat.url}</img>
  );

  return (
    <div>
      {renderCats}
    </div>
  );
};

export default CatList;
