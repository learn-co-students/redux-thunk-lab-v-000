import React from 'react'

const CatList = (props) => {
  function renderCats() {
    return props.catPics.map((image, index) => {
      return (
        <div key={index}>
          <img src={image.url} alt="catpic" />
        </div>
      )
    })
  }
  return (
    <div>
      {renderCats()}
    </div>
  )
}

export default CatList;
