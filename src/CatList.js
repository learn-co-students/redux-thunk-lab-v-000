import React from 'react'

const CatList = (props) => {
  console.log("CatList", props)
  if(props.catPics){
    const catPics = props.catPics.map( pic => <img key={pic.id} alt="Whoops" src={pic.url}/>)
    return <div>{catPics}</div>
  } else {
    return <div/>
  }
}

export default CatList
