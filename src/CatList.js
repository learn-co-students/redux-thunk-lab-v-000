import React from 'react';

const CatList = (props) => {
  const renderedCats = props.catPics.map(cat => { return (
    <div>
      <img key={cat.id} src={cat.url} alt="cat" />
    </div>
  )})
  return (
    <div>
      {renderedCats}
    </div>
  )
}

export default CatList;
