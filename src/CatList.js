import React from 'react';

const CatList = ({catPics}) => {
  const cats = catPics.map((cat,index) => {
    return <li key={index}><img src={cat.url} alt="catpic"/></li>
  })
  return <div>
    {cats}
  </div>
}

export default CatList;
