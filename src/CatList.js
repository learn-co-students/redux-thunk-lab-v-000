import React from 'react';

export const CatList = ({ catPics} ) => {
  const PicsList = catPics.map((pic, index)=> {
    return <li key={index}><a href={pic.url}><img src={pic.url}/></a></li>
  })
  return(
    <ul>
      {PicsList}
    </ul>
  )
}
