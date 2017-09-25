import React from 'react';

const CatList = (props) => {
  const renderCats = props.catPics.map((catPic, index) =>
    <img key={index} src="{catPic}" />)

  return (
    <div>
      {renderCats}
    </div>
  )
}



export default CatList