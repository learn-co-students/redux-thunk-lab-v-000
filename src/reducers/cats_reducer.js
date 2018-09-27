
export default function catsReducer(
	state = {
		loading: false,
		pictures: []
	}, action) {

	switch(action.type){
		case "LOADING_CATS":

			return Object.assign({}, state, {loading: true})
			// sometimes spread can be wierd in the loading action
			// return {...state, loading: true}
		case "FETCH_CATS":
			console.log(action)
			return {...state, loading: false, pictures: action.payload.map(cat => cat)}
			// return Object.assign({}, state, {pictures: action.payload.map(cat => cat)})
		default:
			return state
	}
}
