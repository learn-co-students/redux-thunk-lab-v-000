import React from 'react';

const CatList = ({catpics}) => {
    let catPicCollection = []
    let imgTags = []
    if (catpics !== null) {
        catPicCollection = catpics.images
        imgTags = catPicCollection.map( catData => <img key={catData.id} src={catData.url} alt="a-cat-pic" />)
    }
    
    return (
        <div>
            {imgTags}
        </div>
    )
}

export default CatList