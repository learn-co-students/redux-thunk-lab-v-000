import React from 'react';

const CatList = (props) => {
  function renderCats(){
    return props.catPics.map(catPic => {
      return (
        <div>
          <img src={catPic.url} />
        </div>
      )
    })
  }


  return (
    <div>
      {renderCats()}
    </div>
  )
}

export default CatList;
