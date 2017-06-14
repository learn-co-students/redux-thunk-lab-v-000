import React from 'react'

const CatList = ({ catPics }) => {
  const renderCats = catPics.map((catPic, index) =>
      <img src={catPic.url} key={index} alt='kitty cat' />
  )

  return (
    <div>
      {renderCats}
    </div>
  )
}

export default CatList
