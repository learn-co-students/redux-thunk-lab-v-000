import React from 'react';

const CatList = (props) => {
  return (
  <React.Fragment>
    {props.catPics.map(cat => <img src={cat.url}/>)}
  </React.Fragment>
  )
}

export default CatList;