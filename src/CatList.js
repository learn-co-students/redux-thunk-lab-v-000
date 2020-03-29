import React from 'react'

const CatList = props => {
    return (
        <ul>
            {props.catPics.map(cat => <img src={cat.url} />)}
        </ul>
    )
}

export default CatList