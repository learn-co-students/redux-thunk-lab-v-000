const initialState = {loading: false, pictures: []}

function cats_reducer(state = initialState, action) {

	switch(action.type) {

		case 'LOADING_CATS': 
		
			alert('Loading Cat Images')
		
		case 'FETCH_CATS': {
			
			if (action.payload) 
				return {...state, pictures: [...state.pictures, action.payload]}
			}

			return state
			
		default:

			return state

	}
}

export default cats_reducer
