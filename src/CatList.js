import React from 'react';

const CatList = ({catPics}) => {
  const cats = catPics.map((cat, index) => {
    return (
      <img key={index} src={cat.url} alt='cat link'/>
    )
  })

  return (
    <div>
      {cats}
    </div>
  )
}

export default CatList;