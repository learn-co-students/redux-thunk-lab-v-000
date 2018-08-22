import React from 'react'

const CatList = ({catPics}) => {
  const renderCats = catPics.map(cat =>
    <img>{cat}</img>)

    return (
      <div>
        {renderCats}
      </div>
    )
}

export default CatList
