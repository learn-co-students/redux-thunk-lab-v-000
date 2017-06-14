import React from 'react'

const CatList = (props) => {
  const catPics = props.catPics.map((catPic, index) => {
    return (
        <p key={index}>
            <img src={catPic.url} />
        </p>
    )
  })

  return (
      <div>{catPics}</div>
  )
}

export default CatList