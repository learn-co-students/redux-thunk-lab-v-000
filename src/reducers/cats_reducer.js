export default function catsReducer(state={
  loading: false, pictures: []
}, action){
  switch(action.type){
      case 'FETCH_CATS':
        return {
          ...state,
          pictures: action.payload,
          loading: false
        }
      case 'LOADING_CATS':
        return{...state, loading: true}
      default:
        return state;
  }
}
