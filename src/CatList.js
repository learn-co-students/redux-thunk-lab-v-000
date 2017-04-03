import React from 'react'

const CatList = (props) => {
  const pics = props.catPics.map( (cat) => {
      return <img src={cat.url} key={cat.id} />
    })
  
  return (
    <div>
      {pics}
    </div>
  )
}

export default CatList