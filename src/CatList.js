// write your CatList component here
import React from 'react'

const CatList = (props) => {
    return (
        <div>
            {props.catPics.map((cat, index) => 
                <img key={cat.id} src={cat.url} alt={'Cat Pic' + (index + 1)} />
            )}
        </div>
    )
}

export default CatList