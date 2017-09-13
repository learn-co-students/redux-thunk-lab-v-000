import React from 'react';
const CatList = (props) => {
  const cats = props.catPics.map((catPic, i) => <img key={i} href={catPic.url} />)
  return <div>{cats}</div>
}

export default CatList;
