function cats_reducer(state = {loading: false, pictures: []}, action) {

	switch(action.type) {

		case 'LOADING_CATS': {
			console.log('LOADING_CATS')
		}

		case 'FETCH_CATS': {
			return { ...state, 
				     pictures: action.payload
				   }
		}
			
		default:

			return state

	}
}

export default cats_reducer
