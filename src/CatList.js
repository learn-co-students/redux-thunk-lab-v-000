import React from 'react';

const CatList = (props) => {
    console.log(props.catPics)
    // debugger;
    return (<div>
        {props.catPics.map((cat)=> <img src={cat.url} key={cat.id}/> )}
    </div>)
}

export default CatList
