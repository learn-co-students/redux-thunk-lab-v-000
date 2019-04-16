import fetch from 'cross-fetch' // npm install --save cross-fetch

function fetchCats() {
// const fetchCats = () => async dispatch => {
	console.log('*** fetchCats ***')
	// Thunk middleware knows how to handle functions.
	// It passes the dispatch method as an argument to the function,
	// thus making it able to dispatch actions itself.
	return dispatch => {
		// First dispatch: the app state is updated to inform
    	// that data is loading
		dispatch({type: 'LOADING_CATS'})
		fetch('http://localhost:4000/db')
				.then(response => {
					return response.json()
				})
				.then(responseJSON => {
					// Update the app state with the results of the API call
					dispatch({ type: 'FETCH_CATS', payload: responseJSON.images })
				})
				.catch(error => {
					alert('An error occurred: ', error)
				})
	}
}

export default fetchCats
