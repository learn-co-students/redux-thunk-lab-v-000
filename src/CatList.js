
import React from 'react'

const CatList = (props) => {
    return (
        <div>
            {props.catPics.map(catPic =>
                <li key={catPic.id}><img src={catPic.url} alt={catPic.id}/></li>
            )}
        </div>
    )
}

export default CatList