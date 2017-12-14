import React from 'react';

const CatList = ({ catPics }) => {
  const renderCatPics = catPics.map(catPic =>
    <div key={catPic.id}>
      <img src={catPic.url} className="thumbnail responsive" style={{height: '200px', width: '200px', margin: 'auto'}}/>
    </div>
  );

  return (
    <div>
      {renderCatPics}
    </div>
  );
};

export default CatList;
