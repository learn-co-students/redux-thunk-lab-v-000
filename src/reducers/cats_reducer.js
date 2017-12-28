const initialState = {
	loading: false,
	pictures: []
}

export default function catsReducer(state = initialState, action) {
	switch(action.type) {
		case 'FETCH_CATS':
			debugger
			return { loading: false, pictures: action.payload };
		case 'LOADING_CATS':
      return Object.assign({}, state, { loading: true })
		default:
			return state;
	};
};