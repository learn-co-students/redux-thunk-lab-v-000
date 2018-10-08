import React, { Component } from 'react';

 const CatList = (props) => {
  function allCats() {
    return props.catPics.map(catPic => {
      return (
        <div>
            <img src={catPic.url}/>
          </div>
       )
    })
  }
  return (
    <div>
      {allCats()}
    </div>
  )
}

export default CatList