import fetchCats from '../actions/catActions'

function catsReducer(state={
  cats:[]
}, action) {
  switch(action.type) {
    case 'FETCH_CATS':
      return {loading: false, cats: action.payload}
    case 'LOADING_CATS':
      return Object.assign({}, state, {loading: true})
    default:
      return state
  }
}

export default catsReducer
