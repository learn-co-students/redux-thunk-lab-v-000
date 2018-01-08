import React from 'react';

const CatList = ({ catPics }) => (
  <div>
    <p>Cat List:</p>
    {catPics.map(cat => <img src={cat.url} />)}
  </div>
);

export default CatList;
