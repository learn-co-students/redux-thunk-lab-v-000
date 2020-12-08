// write your CatList component here
import React from 'react';

const CatList = ({ catPics }) => {
    const catUrls = catPics.map(cat  => 
        <img src={cat.url} key={cat.id} alt="cat pic"></img>
    )
    
    return (
        <div>
            {catUrls}
        </div>
    )
}

export default CatList;