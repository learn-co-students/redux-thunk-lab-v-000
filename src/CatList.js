import React from 'react';

const CatList = (props) => {
  return(
    //this.props.catPics.map(catPic => <li><img src={catPic.url} alt="cat-pic" /></li>)
    <div>
      <h3> Cats </h3>
      <p>
      {props.catPics.map((catPic, index) => <li key={index}><img src={catPic.url} alt="cat-pic" /></li>)}
      </p>
    </div>
  )
}

export default CatList
