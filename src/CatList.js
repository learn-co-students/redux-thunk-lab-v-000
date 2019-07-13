import React from 'react'

const CatList = ({catPics}) => {
  const cat = catPics.map(cat => {
    return <img key={cat.id} src={cat.url} alt="Cat" height="200" width="200" />
  })

  return (
    <div>
        <h2>Cats!</h2>
      { cat }
    </div>
  )
}

export default CatList