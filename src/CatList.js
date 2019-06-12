import React from 'react';

const CatList = (props) => {
    const catPicCollection = props.catPics
    const imgTags = catPicCollection.map( catData => <img key={catData.id} src={catData.url} alt="a-cat-pic" />)
    
    return (
        <div>
            {imgTags}
        </div>
    )
}

export default CatList