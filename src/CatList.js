import React from 'react';
import { Component } from 'react';

const CatList = ( {catPics} ) => {

  const catImages = catPics.map((cat, index) => {
    return <img src={cat.url} key={index}/>
  })

  return (
    <div>
      {catImages}
    </div>
  )
}

export default CatList;
