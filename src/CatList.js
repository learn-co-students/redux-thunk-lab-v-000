import React from 'react'

function CatList(props) {
  debugger

  const catList = props.catPics.map((pic, index) => {
     return <li key={index}> <img src={pic.url} alt={pic.source_url} height="84" width="84" /> </li>
  })

  return (
    <ul>
      these are the cat pics
      {catList}
    </ul>
  )
}

 export default CatList
