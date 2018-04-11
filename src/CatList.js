import React from 'react'

const CatList = (props) =>
  <div>
    {props.catPics.map(catPic => <div><img src={catPic.url} alt="cat-pic"/></div>)}
  </div>

export default CatList;
