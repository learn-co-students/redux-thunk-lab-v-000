
function catsReducer(state = { loading: false, pictures: [] }, action) {
  switch (action.type) {
    case 'LOADING_CATS':
      console.log('catsReducer LOADING:', state)
      return { ...state, loading: true }

    case 'FETCH_CATS':
      console.log('catsReducer FETCH:')
      return { ...state, loading: false, pictures: action.payload }

    default:
      return state;
  }
}

export default catsReducer;