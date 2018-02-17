import React, { Component } from 'react';

// const CatList = (props) => {
//   if (props.catPics.length === 0) {
//     return (
//       <div>
//       wait for the cats
//       </div>
//     )
//   } else {
//     const cats = props.catPics[0].map((cat, i) => {
//       return (
//         <img key={i} src={cat.url} />
//       )
//     })
//     return (
//       <div>
//         {cats}
//       </div>
//     )
//   }
// }

const CatList = (props) => {
  function listCats() {
    return props.catPics.map(catPic => {
      return (
        <div className="col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 well">
            <img src={catPic.url} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}}/>
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      {listCats()}
    </div>
  )
}

export default CatList;
