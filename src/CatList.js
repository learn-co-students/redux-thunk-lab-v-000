import React, { Component } from 'react'

class CatList extends Component {


  render() {


    const cats = this.props.catPics.map((cat, ix) => 

    	<div className='catpic'>
    		<img key={ix} src={cat.url}/>
    	</div>
    	)

    return(
      <div>
      	{cats}
      </div>
    )
  }
}

export default CatList