import React from 'react';

 const CatList = (props) => {
	
	function renderCatPics() {
		return props.catPics.map(catPic => {
			//debugger
			return (
				<img key={catPic.id} src={catPic.url} alt="kitty" width="200px" />
			)
		})
	}

	return (
		<div>
			{ renderCatPics()}
		</div>
	)
};

export default CatList;