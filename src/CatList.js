import React from 'react';

const CatList = (props) => {
  const renderCats = props.catPics.map(pic => 
    <img src={pic.url} alt="cat" width="200"/>
  )

  return (
    <div>
      {renderCats}
    </div>
  )
};

export default CatList;