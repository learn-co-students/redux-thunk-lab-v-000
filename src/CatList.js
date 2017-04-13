import React from 'react';

export default function CatList(props) {
  const pics = props.catPics.map(catPic => <div><img src={catPic.url} alt="cat" /></div>)
  return (
    <div>{ pics }</div>
  )
}
