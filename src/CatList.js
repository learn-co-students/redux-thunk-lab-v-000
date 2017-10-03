import React from 'react';

const CatList = function(props) {
    console.log(props.catPics)
    debugger
    let catPics = props.catPics.map((pic, index) => 
            <img key={index} >{pic}</img>
        )
    return <div>{ catPics }</div>;
};

export default CatList;