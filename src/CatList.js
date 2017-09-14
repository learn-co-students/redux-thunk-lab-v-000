import React from 'react';

const CatList = ({ catPics }) => {
  const renderCats = catPics.map((pic, index) => {
    return(<div key={index}><img role="presentation" src={pic.url} /></div>)
  })

  return(
    <div>
      {renderCats}
    </div>
  );
}

export default CatList;