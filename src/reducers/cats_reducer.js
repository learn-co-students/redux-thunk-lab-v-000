
function catsReducer(state = {
  loading: false,
  pictures: []
}, action) {
  switch (action.type) {

    case "LOADING_CATS":
      console.log('loading cats', action);
      return { ...state, loading: true, pictures: [] };

    case "FETCH_CATS":
      console.log('fetching cats', action);
      return { ...state, loading: false, pictures: action.payload }

    default:
      return state;
  }
}

export default catsReducer;
