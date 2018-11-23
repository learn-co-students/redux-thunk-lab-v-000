import React from 'react'

function CatList(props) {
  debugger
        const cats = props.catPics.map(pic => <img key={pic.id} src={pic.url}/>)
    return (
        <div>
            these are the cat pics
            {cats}
        </div>
    )
}


export default CatList
