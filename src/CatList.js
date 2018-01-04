import React from 'react';

const CatList = ({ catPics }) => {
  const renderCats = catPics.map(pic =>
    <img src={pic.url} width="500" height="500" key={pic.id}/>
  );
  return (
    <div>
      {renderCats}
    </div>
  );
};

export default CatList
