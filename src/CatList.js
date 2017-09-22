import React from 'react'

const CatList = (props) => {
  function displayCats(){
    return props.catPics.map((catPic, index) => {
      return(
        <div key={index}>
        <img src={catPic.url} alt="kitty"/>
        </div>
      )
    })
  }

  return(
    <div>
    { displayCats() }
    </div>
  )
}

export default CatList;
