import React from 'react';

const CatList = ({catPics}) => {
  return(
    <div>
      {catPics.map((catPic) => {
        return <img src={catPic.url}/>
      })}
    </div>
  );
}

export default CatList;
