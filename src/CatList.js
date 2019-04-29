import React from 'react'

const CatList = (props) => {

    // console.log('this is the props in CatList: ', props.catPics)
    let catImages
    if (props.catPics !== null) {
        catImages = props.catPics.map((cat, id) => <img key={id} src={cat.url} alt="catpic-#{id}" />)
    }
    // console.log('array of cat image urls: ', catImages)
    return (
        <div>
            {catImages}
        </div>
    )
}

export default CatList