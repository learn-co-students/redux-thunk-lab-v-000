export default (state={loading: false, pictures: []}, action) => {
	switch(action.type) {
		case 'FETCH_CATS':
		  console.log({loading: false, pictures: action.payload})
		  return {loading: false, pictures: action.payload}
		default: 
		  return state
	}
}