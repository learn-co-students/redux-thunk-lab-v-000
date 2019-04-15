// const fetchCats = () => {
// 	return dispatch => {
// 		dispatch({type: 'LOADING_CATS'})
// 		console.log('FETCH: ', fetch('http://localhost:3000/db'))
// 		return fetch('http://localhost:3000/db')
// 			.then(response => response.json)
// 			.then(cats => dispatch({type: 'FETCH_CATS', payload: cats.images}))
// 	}
// }

function fetchCats() {
	return dispatch => {
		dispatch({ type: 'LOADING_CATS' })
		return fetch('http://localhost:4000/db')
				.then(response => {
					return response.json()
				})
				.then(cats => {
					dispatch({ type: 'FETCH_CATS', payload: { cats } })
				})
	}
}

export default fetchCats
