export default (
	state = {
		pictures: [],
		loading: false
	},
	action
) => {
	switch (action.type) {
		case 'FETCH_CATS':
			return cats;
		case 'LOADING_CATS':
			return cats;
		default:
			return state;
	}
};
