import React, { Component } from 'react';

const CatList = ({catPics}) => {

  const images = catPics.map((cat, index) => {
    return <img src={cat.url} key={index} alt="cat"/>
  });

  return (
    <div>
      {images}
    </div>
  )
}

export default CatList;
