import React from 'react';

const CatList = (props) => {

  const listCats = () => {
    return props.catPics.map((catPic,i) => {
      return(
        <div key={i}>
          <img src={catPic.url}/>
        </div>
      )
    })
  }

  return(
    <div>
      {listCats()}
    </div>
  );
}

export default CatList
