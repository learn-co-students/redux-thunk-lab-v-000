import React from 'react';

const CatList = (props) => {
    const catPics = props.catPics.map((cat, i) => {
       return (
           <div key={i}>
                <img src={cat.url} alt="cat"/>
            </div>
       )
    })

    return (
        <div>{catPics}</div>
    );
   
}

export default CatList;