export default function catsReducer (state= {loading: false, pictures: []}, action) {
  switch (action.type) {
    case 'FETCH_CATS': //create state object
      return Object.assign({}, state, {loading: false, pictures: action.payload})

    case 'LOADING_CATS': //load cats object
      return Object.assign({}, state, {loading: true})

      default:
      return state;
  }
}
