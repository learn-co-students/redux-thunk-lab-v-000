import React from 'react';

// {catPics} is deconstructed object passed from App
const CatList = ({ catPics })  => {

  const catcard = catPics.map(cat => {
    return <img key={cat.id} src={cat.url} alt= "Happy Cats" height= "100" width= "75"/>
  })
    return (
      <div> {catcard} </div>
    )
}

export default CatList;
