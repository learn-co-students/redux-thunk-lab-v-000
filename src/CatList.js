import React, { Component } from 'react';


const CatList = props => {
	const cats = props.catPics.map(catPic => <img>{catPic.url}</img>)
		return (
			<div>
				{cats}
			</div>
	)
}	


export default CatList