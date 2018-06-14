import React from 'react';

const CatList = ({ catPics }) => {
  const renderCats = catPics.map((catPic, idx) =>{
    return <img src={catPic.url} key={idx}/>
  })
  return(
    <div>
      {renderCats}
    </div>
  )
}

export default CatList;
