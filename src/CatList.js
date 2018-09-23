import React from 'react'

function CatList(props) {
    // console.log(props) 
        const cats = props.catPics.map(pic => <img key={pic.id} src={pic.url}/>)
    return (
        <div>
            these are the cat pics
            {cats}  
        </div>
    )
}


export default CatList

