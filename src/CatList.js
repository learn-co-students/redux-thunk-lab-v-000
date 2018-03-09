import React from 'react'

const CatList = (props) => {
  const allCats = props.catPics.map(pic => <img>{pic.url}</img>)
  return (
    <div>
      <h1>Cat List</h1>
      {allCats}
    </div>
  )
}

export default CatList
