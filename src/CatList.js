import React from 'react'
const CatList = (props) => {
	return (
		<div>
			{props.catPics.map((cat)=><img src={cat} />)}
		</div>
	)
}

export default CatList