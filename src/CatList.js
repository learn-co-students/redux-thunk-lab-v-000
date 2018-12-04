import React from 'react';
import { connect } from 'react-redux';

const CatList = props => {
//debugger
 const catCards = props.catPics.map(catPic => <li><img src={catPic.url}/></li>)

  return (
  <div className="col-md-8">
	  <ul>
		{ catCards }
	  </ul>
  </div>
  )

}

export default CatList;
