export default (state = {
  loading: false,
  pictures: []
}, action) => {

  switch (action.type) {
    case 'LOADING_CATS':
      return {...state, loading: true}

    case 'FETCH_CATS':
    debugger
      return {loading: false, pictures: action.payload};

    default:
      return state;
  }
}
