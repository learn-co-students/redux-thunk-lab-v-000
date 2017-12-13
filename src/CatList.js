import React from 'react';

const CatList = (props) => {
   function listCats() {
      return props.catPics.map((catPic, index) => {
         return (
            <div key={index}>
               <img src={catPic.url} style={{height: '200px', width: '200px'}}/>
            </div>
         )
      })
   }

   return (
      <div>
         {listCats()}
      </div>
   )
}

export default CatList;