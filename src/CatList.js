import React from 'react';
// import { connect } from 'react-redux';

const CatList = ({ catPics }) => {
  const cats = catPics.map(image =>
    <img src="${image.url}" > here is a cat </img>
  );

  return (
    <div>
      <h3> {cats} </h3>
    </div>
  );
};

export default CatList;

