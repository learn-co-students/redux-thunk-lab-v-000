// Define your catsReducer in src/reducers/cats_reducer.
// Your catsReducer should respond to two actions with types of 'LOADING_CATS' and a 'FETCH_CATS' respectively.

export default function catsReducer(state={
  loading: false,
  pictures: []
  }, action){

    switch(action.type){
      case "LOADING_CATS":
        console.log("in the cats reducer under loading cats")
        return {...state, loading:[...state.loading, true]}
      case "FETCH_CATS":
        console.log("fetching cats")
        return {loading: false, pictures: action.payload}
        //code
      default:
        return state
  }
}