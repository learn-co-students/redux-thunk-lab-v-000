import fetchCats from '../actions/catActions'

function catsReducer(state={
  cats:[]
}, action) {
  switch(action.type) {
    case 'FETCH_CATS':
      return fetchCats()
    default:
      return cats
  }
}

export default catsReducer
