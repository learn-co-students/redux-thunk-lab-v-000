import React from 'react';

const CatList = ({ catPics }) => {

  const renderCatPics = () => {
    return catPics.map(cat => <img key={cat.id} alt={'cat pictures'} src={cat.url}/>)
  }

  return(
    <div>
      {renderCatPics()}
    </div>
  )
}

export default CatList;
