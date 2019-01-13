import React from 'react'

const CatList = props => {

  return (
    <div>
      {props.catPics.map(catPic =>
        <img src={catPic.url} alt="cat-pic"></img>
      )}
    </div>
  )
}

export default CatList
