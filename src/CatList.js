import React, { Component } from 'react';

const CatList = (props) => {
    debugger
    const catsDiv = props.catPics.map(pic =>{
        <img
            src={pic.url}
          />;
            
    })
    return (
        <div>
            { catsDiv }
        </div>
    )
}

export default CatList