import React from 'react'
// import { connect } from 'react-redux'


const CatList = ({catPics}) => {	

	let arrCatPics = catPics

	if (typeof Number(Object.keys(catPics)[0]) === 'number') {
		// Convert the JavaScript object with numeric keys into array
		arrCatPics = []
		for (let prop in catPics[0]) {
		    arrCatPics.push(catPics[0][prop])
		}
	}

	const catPictures = arrCatPics.map(picture => (
		
		<p key={picture.id}><img src={picture.url} alt='' /></p>
	
	))
	
	return (

		<div>
			{catPictures}
		</div>
	)
}

// const mapStateToProps = state => {
// 	return {cats: state.pictures}
// }

export default CatList