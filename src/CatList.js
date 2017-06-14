import React from 'react'

const CatList = ({ catPics }) => {
  const renderCats = catPics.map((catPic, index) =>
      <img src={catPic.url} key={index} />
  )

  return (
    <div>
      {renderCats}
    </div>
  )
}

export default CatList
