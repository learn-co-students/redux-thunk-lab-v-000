import React from 'react';

const CatList = (props) => {
    const renderCats = props.catPics.map((pic, idx) => <img key={idx} src={pic.url} alt={`cat-${idx}`} />)
    return (
        <div>
            <h1>Cats Cats Cats</h1>
            {props.loading? <p>One moment, we're fetchinc some kitties...</p> : renderCats}
        </div>
    )
    
}

export default CatList;