import React, { Component } from 'react';

const CatList = (props) => {
  if (props.catPics.length === 0) {
    return (
      <div>
      wait for the cats
      </div>
    )
  } else {
    const cats = props.catPics[0].map((cat, i) => {
      return (
        <img key={i} src={cat.url} />
      )
    })
    return (
      <div>
        {cats}
      </div>
    )
  }
}



export default CatList;
