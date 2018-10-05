function catsReducer(state = [], action) {
  switch (action.type) {
    case 'LOADING_CATS':
      return state

    case 'FETCH_CATS':
      return action.cats

    default:
      return state
  }
}
