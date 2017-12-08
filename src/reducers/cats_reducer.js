function catsReducer(state = {loading: false, pictures:[]}, action) {
  switch (action.type) {
    case 'LOADING_CATS':
      return {...state, loading: true}
      break;
    case 'FETCH_CATS':
      return {loading: false, pictures: action.payload}
      break;
    default:
      return state
  }
};

export default catsReducer