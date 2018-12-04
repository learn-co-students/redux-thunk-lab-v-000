export const fetchCats = () => {
//debugger
	return (dispatch) => { 
		dispatch({ type: 'LOADING_CATS' })
//		debugger
		return fetch('http://localhost:4000/db')
		  		.then( response => response.json() )
		  		.then( cats => dispatch({ type: 'FETCH_CATS', payload: cats.images }) )
	}
   
}

