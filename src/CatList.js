import React from 'react';

const CatList = (props) => {
	const catsInfo = props.catPics.map(catPic => 
		<img key={catPic.id} src={catPic.url} role="presentation"/>
	);

	return (
		<div>
			{catsInfo}
		</div>
	);
}

export default CatList;