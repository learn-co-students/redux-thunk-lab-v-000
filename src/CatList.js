import React from 'react';

const CatList = (props) =>
  <div>
     {props.catPics.map((pic, id) => <li key={id}><img src={pic.url}/></li>)}
  </div>

export default CatList