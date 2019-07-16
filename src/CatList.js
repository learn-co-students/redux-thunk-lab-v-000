import React from 'react';

const catList = (props) => {
	const catPic =
		props.catPics &&
		props.catPics.map((cat) => {
			return <img key={cat.id} src={cat.url} />;
		});
	return <div>{catPic}</div>;
};
export default catList;
