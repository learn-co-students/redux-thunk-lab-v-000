import React from 'react';

const CatList = props => {
    return (
      <div>
          {props.catPics.map(pic => <div><img alt="cat" src={pic.url}></img></div>)}
      </div>
    )
  }

export default CatList