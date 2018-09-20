import React, { Component } from 'react'

const CatList = ({catPics}) => {
  const catPhotos = catPics.map((photo, index) => {
    return(
      <div>
        <img alt={`cat ${photo.index}`} src={photo.url} />
      </div>
    )
  })

  return (
    <div>
    {catPhotos}
    </div>
  )
}

export default CatList