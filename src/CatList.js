
import React from 'react';


const CatList = (props) => {
  debugger;
  const renderCats = props.catPics.map(cat =>
    <img key={cat.id} href={cat.url}/>
  );

  return (
    <div>
      {renderCats}
    </div>
  );
};

export default CatList;
