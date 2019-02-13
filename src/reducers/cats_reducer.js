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
