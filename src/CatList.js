import React from 'react';


const CatList = (props) => {
  const catPics = props.catPics.map(pic => {
    return (
      <div>
        <img src={pic.url} alt="cat"/>
      </div>
    )
  })

  return (
        <div>{catPics}</div>
  )

}

export default CatList;
