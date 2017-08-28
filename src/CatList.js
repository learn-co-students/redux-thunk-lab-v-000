import React from 'react'

const CatList = (props) => {
  function listCats() {
    return props.catPics.map(catPic => {
      return (
        <div>
            <img src={catPic.url} alt="cool"/>
        </div>
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