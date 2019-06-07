export function catsReducer(state = { cats: []}, action) {
  switch(action.type) {
    case "LOADING_CATS":
      return state

    case "FETCH_CATS":

      return {
        cats: state.cats.concat(action.payload)
      }
        
    default:
      return state
  }
}