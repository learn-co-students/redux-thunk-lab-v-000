// write your CatList component here
import React, { Component } from 'react';


class CatList extends Component {


	render() {
		console.log(this.props.catPics)
    return(
    	<div>
    	  {this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} alt="cat"/>)}
    	</div>
    	);
    }
};

export default CatList;