import React from 'react'

const CatList = ({catPics}) => {
  console.log({catPics})
  const renderCats = catPics.map((cat, index) => <img key={index} src={cat.url} />)
  return(
    <div>
      {renderCats}
    </div>
  )
}

export default CatList