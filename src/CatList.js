import React from 'react'

const CatList = (props) => {
  return (
    <div>
      {props.catPics.map(catPic => <div><img src={catPic.url} /></div>)}
    </div>
  )
}

export default CatList
