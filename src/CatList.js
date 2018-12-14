import React from 'react'

function CatList(props) {
  console.log(props)
  return (props.cats.urls.map((url, i) => <img src={url} key={i} alt="" />))
}

export default CatList;
