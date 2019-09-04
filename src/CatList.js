import React from 'react';

const CatList  = props => {
  const pics = props.catPics && props.catPics.map(pic => {
      return <img src={pic.url} />
  });

  return <div>{pics}</div>

}

export default CatList;
