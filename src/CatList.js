import React from 'react';

const CatList = ({ catPics }) => {
  return (
    <div>
      {catPics.map(pic => <img src={pic.url} alt="A Cat" />)}
    </div>
  )
}

export default CatList