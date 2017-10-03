import React from 'react';

const CatList = function(props) {

    let catPics = props.catPics.map((pic, index) => 
            <img key={index} src={pic.url} />
        )
    return <div>{ catPics }</div>;
};

export default CatList;