import React from 'react';
export default function CatList(props) {
    console.log(props)
    const pictures = props.catPics || []
    const catPics = pictures.map( catPic => <img alt="cat" src={catPic.url}/>) 
    return(
        <div>
           <h3>All the Cats</h3>
            {catPics}
        </div>
    )
}
