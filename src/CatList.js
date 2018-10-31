import React from 'react';

const CatList = ({ catPics }) => {
  debugger
  const cats = catPics.map(cat =>
    <img
      src={cat.url}
      id={cat.id}
      key={cat.id}
    />
  )
    return (
      <div>
        {cats}
      </div>
    );
  };

export default CatList;
