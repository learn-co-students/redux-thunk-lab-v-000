import React from 'react';

export default class CatList extends React.Component {
	render() {
		const list = this.props.catPics.map((pic, index) => <img key={index} src={pic.url} />)
		return (
			<div>
				{list}
			</div>
			)
	}
}