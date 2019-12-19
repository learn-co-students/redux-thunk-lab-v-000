// write your CatList component here
import React from 'react';

const CatList = props => {

    return (
        <div>
            <ul>
                {props.catPics.map(catPic => <li key={catPic.id}><img src={catPic.url} alt={catPic.id}></img></li>)}
            </ul>
        </div>
    )
}

export default CatList;
