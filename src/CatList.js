import React from 'react';

 const catList = (props) => {
   debugger;
	const renderPics =
		props.catPics &&
		props.catPics.map((cat) => {
			return <img key={cat.id} src={cat.url}/>;
		});
	return <div>{renderPics}</div>;
};
export default catList;
