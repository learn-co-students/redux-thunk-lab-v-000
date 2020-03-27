import React from 'react';

const CatList = ({ catPics }) => (
  <div>
    {catPics.map(cat => <img src={cat.url} alt="cat" />)}
  </div>
)

export default CatList;
