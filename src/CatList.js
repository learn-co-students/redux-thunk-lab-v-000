import React from 'react';

const CatList = (props) => {
  const renderCats = props.catPics.map((cat, index) =>
    <img key={index} src={cat.url} alt="Cat"/>
  );

  return (
    <div>
      {renderCats}
    </div>
  )
}

export default CatList;
