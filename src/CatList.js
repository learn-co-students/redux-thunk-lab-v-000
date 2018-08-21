import React, {Component} from 'react';
import uuid from 'uuid'
export default class CatList extends React.Component {

	render() {
		const catPic = this.props.catPics.map(pic => {
			return <img key={uuid()} src={pic.url}  />
		})

		return (<div>{catPic}</div>)
	}
} 
