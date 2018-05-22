import React from 'react'

const CatList = (props) => {
  const catsImages = props.catPics.map((catPick, index) => {
    return <img src={catPick.url} key={index} role="presentation" />
  });
  return (
    <div>
      {catsImages}
    </div>
  )
};
export default CatList