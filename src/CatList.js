import React from 'react';
// import { connect } from 'react-redux';

const CatList = (props) => {
  const cats = props.catPics.map(image =>
    <img src="${image.url}" > here is a cat </img>
  );

  return (
    <div>
      <h3> {cats} hi</h3>
    </div>
  );
};

export default CatList;

