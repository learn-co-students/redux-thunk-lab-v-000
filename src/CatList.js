import React from 'react'

const CatList = (props) => {
  //console.log(props , "props")
  const images = props.catPics.map(( image, index) => <img key={index} src={image.url} height='100' width='100' /> )
  return <div>{images}</div>

}

export default CatList
