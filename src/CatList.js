import React from 'react'

const CatList = (props) => {
  return <div>
    {props.catList.map((cat) => <img key={cat.id} src={cat.url}/>)}
  </div>
}

export default CatList
