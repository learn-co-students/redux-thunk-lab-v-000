import React from 'react';

const CatList = ({ catPics }) => {
  const renderedPics = catPics.map(pic => <img src={ pic.url } />);
  
  return (
    <div>
      { renderedPics }
    </div>
  );
}

export default CatList