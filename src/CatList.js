import React from 'react';

const CatList = ({catPics}) => {
  return (
    <div>
      {catPics.map((cat, index) => <img key={index} alt="cat" src={cat.url}/>)}
    </div>
  );
};

export default CatList;