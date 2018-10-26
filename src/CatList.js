import React from 'react';

const CatList = (props) => {

  function catImages() {
    return props.catPics.map(catPic => {
      return (
        <div>
         <img src={ catPic.url } alt="catPic"/>
        </div>
      )
    })
  }

  return(
    <div>
      { catImages() }
    </div>
  )
}

export default CatList
