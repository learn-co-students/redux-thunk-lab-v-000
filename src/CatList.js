import React from 'react';

export default class CatList extends React.Component {
	render() {
		const cats = this.props.catPics.map(pic => {
			return <img key={pic.id} src={pic.url} role="presentation" />
		});

		return (
			<div>
				{cats}
			</div>
		)
	}
}