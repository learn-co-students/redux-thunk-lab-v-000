import React from 'react'

function CatList(props) {
    console.log(this)
        // const cats = props.catPics.map(pic => <img key={pic.id} url={pic.source_url}/>)
    return (
        <div>
            these are the cat pics
            {/* {cats}   */}
        </div>
    )
}


export default CatList

