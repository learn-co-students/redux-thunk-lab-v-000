import React, { Component } from 'react';

class CatList extends Component {

	render() {
		debugger
		const cats = this.props.catPics.map(cat => <img url={cat.url}/>);
		return (
		<div>
			{cats}
		</div>
		)
	}

}

export default CatList;