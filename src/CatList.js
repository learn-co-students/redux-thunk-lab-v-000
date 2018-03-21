import React from 'react'

const CatList = (props) => {
  const listCats = props.catPics.map(catPic => {
      return (
        <div>
          <img alt="cat" src={catPic.url}></img>
        </div>
      )
    })

  return (
    <div>
      {listCats}
    </div>
  )
}

export default CatList
