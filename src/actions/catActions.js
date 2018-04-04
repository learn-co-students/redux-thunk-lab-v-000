import fetch from 'isomorphic-fetch'

export const fetchCats = () => {
	return (dispatch) => {
		dispatch({type: 'LOADING_CATS'})

		return fetch('http://localhost:4000/db').then(response => {
			return response.json();
		})
		.then(catsJSON => {
			return dispatch({type: 'FETCH_CATS', payload: catsJSON.images})
		});
	}

}