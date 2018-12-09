import React from 'react';

const CatList = props => {
  console.log('PROPS.CATS', props.catPics)
  const catUrls = props.catPics.map(cat => (
    <div key={cat.url}><img src={cat.url}  alt="cat"></img></div>
  ))
   
  return (
    <div>
      { catUrls }
    </div>
  )
}

export default CatList;
