export default function catsReducer(
	state = {
		pictures: [],
		loading: false
	},
	action
) {
	// console.log(action);
	// debugger;
	switch (action.type) {
		case 'FETCH_CATS':
			// console.log(action);
			return state.pictures;
		case 'LOADING_CATS':
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
