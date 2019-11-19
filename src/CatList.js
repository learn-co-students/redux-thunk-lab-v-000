// write your CatList component here

import React from 'react';

const CatList = (props) => {
    var images = props.catPics.map((catImage) => {

      return <img src= {catImage.url} />
     
         
      
    }
    )
    return <div>{images}</div>
        

}



export default (CatList);