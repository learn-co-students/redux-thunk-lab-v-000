import React from 'react';


const CatList = ({ catPictures }) => {
  //debugger;
  return(
    <div>
      { catPictures.map( (catPic, idx) =>
        <img key={idx} src={catPic} />
      )}
    </div>
  )
}

export default CatList;
