import React, { Component } from 'react';

class CatList extends Component {
	constructor(props) {
		super(props)
	}
  render() {
    const catPics = this.props.catPics.map((pic, index) => <img key={index} src={pic.url} alt="cat pic"/>)
    return(
      <div>{catPics}</div>
    )
  }
}

export default CatList