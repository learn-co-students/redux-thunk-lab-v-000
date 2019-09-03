import React from 'react';

const CatList = (props) => {
  const showCats = props.catPics.map(cat => {
    return (
      <div>
        <img key = {cat.id} src={cat.url} />
      </div>
    )})
    return (
      <div>
        {showCats}
      </div>
    )
}

export default CatList;
