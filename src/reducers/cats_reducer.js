function catsReducer(state = { loading: false, pictures: [] }, action) {

  switch (action.type) {
    case 'FETCH_CATS':
      return Object.assign({}, state, { pictures: action.payload })
    default:
      return state
  }
}

export default catsReducer
