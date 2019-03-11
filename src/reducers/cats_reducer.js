export default function catsReducer(state = {
  loading: false,
  pictures: []
}, action) {
  switch (action.type) {
    case "LOADING CATS":
      return {loading: true, pictures: [...state.pictures]}
    case "FETCH_CATS":
      return {loading: false, pictures: action.payload}
    default:
      return state
  }
}
