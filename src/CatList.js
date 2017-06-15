import React from 'react';
export default (props) => {
    const catPics = props.catPics.map( catPic => <img alt="cat" src={catPic.url}/>)
    return(
        <div>
            {catPics}
        </div>
    )
}
