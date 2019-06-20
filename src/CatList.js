import React from 'react'

const CatList = ({ catPics }) => {
  const renderCats = catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt="catpic"/>)
  return (
    <div>
      {renderCats}
    </div>
  )
}

export default CatList