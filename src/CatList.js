import React from 'react'; 

const CatList = (props) => {
	function listCats() {
		return props.catPics.map((catPic, idx) => {
			return (
				<div key={idx}>
					<img src={catPic.url}/>
				</div>
			)
		})
	}

	return (
		<div>
			{listCats()}
		</div>
	)
}

export default CatList