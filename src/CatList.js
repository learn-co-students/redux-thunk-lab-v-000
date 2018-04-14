import React from 'react';

const CatList = ({ catPics }) => {
  const renderCatPics = catPics.map((catpic, index) =>{
    return <img src={catpic.url} key={index}/>
  })
  return(
    <div>
      {renderCatPics}
    </div>
  )
}

export default CatList;