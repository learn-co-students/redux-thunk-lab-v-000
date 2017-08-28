import React from 'react';

const CatList = props => {
  return (
    <div>
      {props.catPics.map((cat, index)=> {
        return <img key={index} src={cat.url} />
      })}
    </div>
  )
}

export default CatList
