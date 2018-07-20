export default function catsReducer(state = [], { type, payload }){
  switch (type) {
    case "FETCH_CATS":
      return { payload }
    default:
      return state
  }
}
