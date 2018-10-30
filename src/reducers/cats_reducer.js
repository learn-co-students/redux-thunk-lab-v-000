export default function catsReducer(state= {loading: false, pictures: []}, action) {
  switch ( action.type ) {
    // LOADING_CATS action copies state exactly and sets loading to true
    case 'LOADING_CATS':
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CATS':
      // FETCH_CATS sets pictures attribute of state equal to data received from the API request
      return {loading: false, pictures: action.payload}
    default:
      return state;
  }
 }
