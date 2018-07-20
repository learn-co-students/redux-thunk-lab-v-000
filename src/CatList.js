import React from 'react'

const CatList = (props) => {
  if(props.catPics.payload){
    debugger;
    const catPics = props.catPics.payload.map( pic => <img src={pic.url}/>)
    return <div>{catPics}</div>
  } else {
    return <div/>
  }



}

export default CatList
