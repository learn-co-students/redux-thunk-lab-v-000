// write your CatList component here
import React from 'react'

const CatList = ({ catPics }) => {
    // console.log(catPics)
    return (
        <div>
            {catPics.map(pic => <img src={pic.url}/>)}
        </div>
    )
}

export default CatList