import React from 'react';

const CatList = (props) => {
  const images = props.catPics.map(cat => {
    return <img src={cat.url} />
  })
  return <div>{images}</div>
}

export default CatList;
