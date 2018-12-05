import React from 'react';

const CatList = (props) => {
  
  function listCats() {
    return props.catPics.map(catPic => {
      return (
        <div>
          <div>
            <img src={catPic.url} alt="Cat" />
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {listCats()}
    </div>
  )
  
}

export default CatList