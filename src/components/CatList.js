import React, {Component} from 'react'

class CatList extends Component {
	renderCats = () => this.props.catPics.map(pic => <img key={pic.id} src={pic.url} /> )

	render(){
		return (<div>
							{this.renderCats()}
						</div>)
	}
}

export default CatList