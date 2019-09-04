import React from 'react';

const CatList = props => {
  const catPics = props.catPics.map(picture => {
    return <img key={picture.id} src={picture.url} alt="cat pic" />
  })

  return <div>{catPics}</div>
}

export default CatList;