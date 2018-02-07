import React from 'react'

const CatList = (props) => {
  const cats = props.catPics.map(catPic => {
      return (<img src={catPic.url}/>)})

  return (
    <div>
      {cats}
    </div>
  )
}

export default CatList
