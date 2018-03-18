import React from 'react';

const CatList = (props) => {
  console.log(props)

  return (
    <div>
     {props.catPics.map(p => <img key={p.id} src={p.url}/>)}
    </div>
  )
}

export default CatList;
