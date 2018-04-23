import React from 'react';

const CatList = ({catPics}) => {
  return (
    <div>
      {catPics.map(catPic =>
        <img src={catPic.url} role='presentation' />
      )}
    </div>
  )
}

export default CatList;
