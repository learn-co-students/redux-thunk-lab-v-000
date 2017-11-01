import React from 'react';

export default function CatList(props){
  return (<div>
    {props.catPics.map((catPic, index)=>{
      return (<img key={index} src={catPic.url}></img>);
    })}
  </div>);
}
