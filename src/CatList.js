import React from 'react';

const CatList = ({catPics}) => {
  return (
    <div className="catlist">
      {catPics && catPics.map((cat, index) => <img key={index} src={cat.url}></img>)}
    </div>
  )
}

export default CatList;
