import React from 'react';

const CatList = (props) => {
  const cats = props.catPics.map(pic => {
    return (
      <div>
        <img src={pic.url} />
      </div>
    )
  })
  return (
    <div>
      {cats}
    </div>
  )
}

export default CatList
