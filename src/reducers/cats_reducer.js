export default function catsReducer(state= {loading: false, pictures: []}, action) {
  switch ( action.type ) {
    case 'LOADING_CATS':
      console.log("reducer gets LOADING_CATS action")
      return Object.assign({}, state, {loading: true})
    case 'FETCH_CATS':
      console.log("reducer gets FETCH_CATS action")
      return {loading: false, pictures: action.payload}
    default:
      console.log("reducer gets default action")
      return state;
  }

}
