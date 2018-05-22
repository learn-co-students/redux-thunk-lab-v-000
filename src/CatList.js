import React from 'react'

const CatList = (props) => {
  return (
    <div>
      {props.catPics.map(catPic => {return (
          <div>
            <img src={catPic.url} role="presentation"/>
          </div>
        )
      })}
    </div>
  )
}

export default CatList
