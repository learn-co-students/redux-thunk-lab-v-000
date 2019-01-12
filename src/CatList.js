import React from 'react';

const CatList = ({catPics}) => {
  return (
    <div>
      <h1>CATS!</h1>
      {catPics.map((cat)=> <img key={cat.id} src={cat.url}/> )}
    </div>
  )
}

export default CatList
