const initState = {
  pictures: [],
  loading: false
}

function cats_reducer(state = initState, action) {
  switch (action.type) {

    case 'LOADING_CATS':
      return { ...state, loading: true }

    case 'FETCH_CATS':
      return { pictures: action.payload, loading: false }

    default:
      return state;
  }
}

export default cats_reducer;
