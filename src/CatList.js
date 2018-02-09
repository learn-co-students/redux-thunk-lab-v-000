import React from 'react';

const CatList = ({ catPics }) => {
  
	const catImgs = catPics.map(catPic => <img href={catPic.url}></img>);

	return (
	<div>
	  {catImgs}
	</div>
	);
};

export default CatList;