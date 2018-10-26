import React from 'react';

export function CatList(props) {

  const catImages = () => {
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
