import React from 'react';

const CatList = (props) => {
  const cats = props.catPics.map(cat => <img src={cat.url} key={cat.id} alt='a beautiful cat'/>);

  return <div>{cats}</div>
}

export default CatList;
