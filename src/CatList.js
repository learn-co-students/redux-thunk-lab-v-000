import React, { Component } from 'react';

const CatList = (props) => {
    const catsDiv = props.catPics.map(pic => {
        return <img src={pic.url} role="presentation" />;
    })
    return (
        <div>
          { catsDiv }
        </div>
    )
}

export default CatList
