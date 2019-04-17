import React from 'react'

const CatList = ({catPics}) => {	

	const catPictures = catPics.map((picture, index) => (
		
		<p key={index}><img src={picture.url} alt='' /></p>
	
	))
	
	return (

		<div>
			{catPictures}
		</div>
	)
}

export default CatList
