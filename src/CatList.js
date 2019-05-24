import React from 'react'

const CatList = props => {
  const catPics = props.catPics.map(catPic => <img src={catPic.url} alt="cats"/>)

  return (
    <div>
      {catPics}
    </div>
  )
}

export default CatList
