import React from 'react';

const catList = (props) => {
	// debugger;
	console.log(props.catPics);

	const catPic = props.catPics.map((cat) => {
		<img key={cat.id} href={cat.url} />;
	});
	return <div>{catPic}</div>;
};
export default catList;
