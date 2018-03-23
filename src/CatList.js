import React from 'react';

const CatList = (props) => {
  const renderCats = props.catPics.map(pic => 
    <img src={pic.url} role="presentation"/>
  )

  return (
    <div>
      {renderCats}
    </div>
  )
};

export default CatList;