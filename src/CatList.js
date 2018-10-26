import React from 'react';

const CatList = props => {

    const catPics = props.catPics.map(cat => <img src={cat.url}/>)
    
    return (
      <div>{catPics}</div>
    )
  
}

export default CatList
