import React from 'react'

const CatList = (props) => {

  function renderCats() {
    return props.catPics.map((catPic, index) => {
      return (
        <div key={index}>
          <img src={catPic.url} style={{height: '200px', width: '200px'}} alt="cat" />
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

export default CatList
