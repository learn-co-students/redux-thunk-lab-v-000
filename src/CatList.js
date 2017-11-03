import React from 'react';

const CatList = ({catPics}) => {
  const catsRender = catPics.map(cat =>
    <img src={cat.url} className="thumbnail responsive" />
  );

  return (
    <div>
      {catsRender}
    </div>
  )
}

export default CatList
