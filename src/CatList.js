import React from 'react'

const CatList = ({catPics}) => {
  return (
    <div>
      {catPics.map(cat => <img src={cat.url} role='presentation' />)}
    </div>
  )
}

export default CatList




