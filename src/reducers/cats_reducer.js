function catsReducer(state = {
	loading: false,
	pictures: [] }, action) {

	switch (action.type) {

		case 'LOADING_CATS':
			console.log('reducer is loading cats...')
			return state

		case 'FETCH_CATS':
			const newState = {loading: false, pictures: action.payload}
			return newState

		default:
			return state
	}
} 

export default catsReducer;