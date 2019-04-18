import React, { Component } from 'react';

export default class CatList extends Component {

	render() {
		console.log('catList props', this.props)
		const renderCats = () => this.props.catPics.map( cat => 
			<img src={cat.url} />)

		return (
			<div id="cat-list">
				This will be a list of cat images!
				{ renderCats() }
			</div>
		)
	}
}