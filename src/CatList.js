import React from 'react';
const CatList = props => {   
  debugger
      const cats = props.catPics.map(catPic => 
		<img key={catPic.id} src={catPic.url} role="presentation"/>
	)
      return (
      <div>
        {cats}
         
      </div>
    );
}
export default CatList