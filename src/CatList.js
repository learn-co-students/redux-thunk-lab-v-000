import React from 'react';

const CatList = props => {
  const catPictures = props.catPics.map((cat, index) => {
    return <img key={index} src={cat.url} />
  })

  return (
    <div>
      <p>Cat List:</p>
      {catPictures}
    </div>
  )
}

export default CatList;
