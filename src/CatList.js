import React from 'react';

const CatList = ({catPics}) => (
  <ul>
    {catPics.map((pic) =>
      <li key={pic.id}><img src={pic.url} alt="Cat Pic" /></li>
    )}
  </ul>
)

export default CatList;
