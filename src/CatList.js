import React, { Component } from 'react';

const CatList = props => {

  function cats() {
    return props.catPics.map(pic => {
      return (
        <div>
          <img src={pic.url} alt="cat" />
        </div>
      )
    })
  }

  return (
    <div>
      {cats()}
    </div>
  )
}
// const CatList = props => {
//   return (
//     <div>hello</div>
//   )
// }
export default CatList
