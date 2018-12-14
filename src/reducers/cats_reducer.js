export default function catsReducer(state = { loading: false, pictures: [] }, action) {
  switch (action.type) {
    case "LOADING_CATS":
      console.log("loadingCats called")
      return { ...state, loading: true }

    case "FETCH_CATS":
      console.log("fetchCats called")
      return { loading: false, pictures: [...action.payload] }

    default:
      return state
  }
}