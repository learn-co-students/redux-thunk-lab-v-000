import React, { Component } from 'react';

const CatList = props => {
    function listCatPictures() {
        return props.catPics.map((pic) => <li key={pic.id}><img src={pic.url} alt="cats"/></li>)
    }

    return (
        <div>
            {listCatPictures()}
        </div>
    )
}

export default CatList; 