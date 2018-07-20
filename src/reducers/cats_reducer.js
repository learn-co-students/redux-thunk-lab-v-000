export default function catsReducer(state = { loading: false, pictures: [] }, { type, payload }){
  switch (type) {
    case "FETCH_CATS":
      return { loading: false, pictures: payload }
    case "LOADING_CATS":
      return { state }
    default:
      return state
  }
}
