import React, { Component } from 'react'

export default class CatList extends Component {

		renderCats = () => this.props.catPics.map((p) => <img src={p.url}/>)

	// renderCats = () => console.log(this.props.catPics)

	render(){
	


		return (
			<div>
				{this.renderCats()}
			</div>
		)
	}
}