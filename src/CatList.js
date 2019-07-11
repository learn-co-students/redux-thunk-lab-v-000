import React from 'react';

const CatList = props => {
  const catPics = props.catPics.map(pic => {
    return <img key={pic.id} src={pic.url} alt="cat pic" />
  })

  return (
    <div> {catPics} </div>
    )
  }

export default CatList
