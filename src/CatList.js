import React from 'react'

const CatList = ({catPics}) => {	

	let arrCatPics
	
	if (Object.keys(catPics).length < 2) {
		// Convert the JavaScript object with numeric keys into an array
		arrCatPics = []
		for (let prop in catPics[0]) {
		    arrCatPics.push(catPics[0][prop])
		}
	} else {
			  arrCatPics = catPics
			}

	const catPictures = arrCatPics.map((picture, index) => (
		
		<p key={index}><img src={picture.url} alt='' /></p>
	
	))
	
	return (

		<div>
			{catPictures}
		</div>
	)
}

export default CatList