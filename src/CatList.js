import React from 'react';

const CatList = props => {
  const catsImages = props.catPics.map( url => <img src={url} />)
  return (
    <div>
      {catsImages}

    </div>
  )
}

export default CatList;
