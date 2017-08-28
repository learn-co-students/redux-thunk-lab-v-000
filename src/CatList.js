import React from 'react';

const CatList = ({ catPics }) => {
  const renderCats = catPics.map((catPic, index) => {
    return <li key={index}><img alt="catpic" src={catPic.url} /></li>
  });

  return (
    <ul>
      {renderCats}
    </ul>
  );
};

export default CatList;
