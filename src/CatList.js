import React from 'react';

const CatList = ({catPics}) => {
  console.log({catPics})
  const displayCats = catPics.map((cat, index) => <img key={index} src={cat.url} style={{height: '100px'}} />)
  return(
    <div>
      {displayCats}
    </div>
  )
}

export default CatList
