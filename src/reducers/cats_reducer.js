const defaultState = {loading: false, pictures: []}

function cats_reducer(state = defaultState, action) {

	switch(action.type) {

		case 'LOADING_CATS': {
			console.log('LOADING_CATS')
		}
		
		case 'FETCH_CATS': {
			console.log('FETCH_CATS')
			console.log('STATE: ', state)
			if (action.payload) {
				return {...state, pictures: [...state.pictures, action.payload]}
			}

			return state

		}
			
		default:

			return state

	}
}

export default cats_reducer
