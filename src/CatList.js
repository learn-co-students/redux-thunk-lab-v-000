import React from 'react';

const CatList = ({catPics}) => {
    return(
      <ul>
        {catPics.map(cat => <img src={`${cat.url}`}/>)}
      </ul>
    )
  }

export default CatList;
