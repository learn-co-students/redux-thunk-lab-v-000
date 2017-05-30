import React from 'react'

const CatList = (props) => {
  function listCats() {
    return props.catPics.map((catPic, index) => (
      <li key={index}>
        <img src={catPic.url} />
      </li>
    ))
  }

  return(
    <div>
      <ul>
        {listCats()}
      </ul>
    </div>
  )
}

export default CatList
