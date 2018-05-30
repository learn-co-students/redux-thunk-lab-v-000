import React from 'react';

const CatList = (props) => {
  const cats = props.catPics.map((c,i) => <img src={c.url} alt="cat pic"/>)

  return(
    <div>
      <h3>This is the CatList Component</h3>
      {cats}
    </div>
  )
}

export default CatList;
