import React from 'react'

const CatList = (props) => {
  function listCats() {
    return props.catPics.map(catPic => {
      return (
        <img src={catPic.url}/>
      )
    })
  }

  return (
    <div>
      {listCats()}
    </div>
  )
}

export default CatList
