import React from 'react';

const CatList = ( {catPics} ) => {

  const catImages = catPics.map((cat, index) => {
    return <img src={cat.url} key={index} alt={cat}/>
  })

  return (
    <div>
      {catImages}
    </div>
  )
}

export default CatList;
