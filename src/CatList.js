import React from 'react';

const CatList = ({ catPics }) => {

  const renderCats = () => {
    return catPics.map(catPic => {
      return (
          <img key={catPic.id} src={catPic.url} alt="Whatever"/>
      )
    })
  };

  return (
    <div>
      {renderCats()}
    </div>
  );
};

export default CatList;
