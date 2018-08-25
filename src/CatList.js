import React from 'react'

const CatList = ({ catPics }) => {
  const catPictures = catPics.map((pic, i) => {
    return (
      <div key={i}>
        <img alt={`cat-${i}`} src={pic.url} />
      </div>
    )
  })

  return (
    <div>
      {catPictures}
    </div>
  )
}

export default CatList;
