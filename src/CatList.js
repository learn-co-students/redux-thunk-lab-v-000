import React from 'react';
import { connect } from 'react-redux';

const CatList = props => {
  const pics = props.catPics.map((cat, index) => {
    return <img key={index} src={cat.url} />
  })

  return (
    <div>
      <h3>Cat List</h3>
      {pics}
    </div>
  )
}

export default CatList;
