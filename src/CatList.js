import React from 'react'

const CatList = props => {
  const listCats = props.catPics.map(catPic => <img src={catPic.url} {...catPic} alt="catpic"/>)

  return (
    <div>
      {listCats}
    </div>
  )
}

export default CatList
