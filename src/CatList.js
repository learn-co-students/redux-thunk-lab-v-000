import React from 'react';

const CatList = ({ catPics }) => {
  const renderCatPics = catPics.map(catPic =>
    <div key={catPic.id}>
      <img src={catPic.url} />
    </div>
  );

  return (
    <div>
      {renderCatPics}
    </div>
  );
};

export default CatList;
