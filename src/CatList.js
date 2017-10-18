import React from 'react';

const CatList = ({catPics}) => {
  const catRender = catPics.map(cat => <img src={cat.url} key={cat.id} alt={cat.id} />);
  return (
    <div>{catRender}</div>
  );

};

export default CatList;
