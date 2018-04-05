import React from 'react'

const CatList = (props) => {
  function showCats(){
    return props.catPics.map(catPic =>{
      return(
        <div>
          <img src={catPic.url}/>
        </div>
      )
    })
  }
  return (
    <div>
      {showCats()}
    </div>
  )
}

export default CatList