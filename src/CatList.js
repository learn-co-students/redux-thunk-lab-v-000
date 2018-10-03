import React, { Component } from 'react';

class catList extends Component {
renderCats = () => this.props.catPics.map((pic, i) => { return <img key={i} src={pic.url}></img> })
	

	render() {
		debugger
		return(
			<div>
				{this.renderCats()}
			</div>
		)
	}
} 


export default catList