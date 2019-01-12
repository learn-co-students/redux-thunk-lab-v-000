
import React from 'react';

const CatList = ({catPics}) => {
   
   
    return (<div>
        {catPics.map((cat)=> <img src={cat.url} key={cat.id}/> )}
    </div>)
}

export default CatList
