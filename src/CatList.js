import React from 'react'

const catList = (props) =>
<div>
  {props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt="cat picture"/>)}
</div>;


export default catList;
