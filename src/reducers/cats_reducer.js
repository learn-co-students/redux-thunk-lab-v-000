export default function catReducer(state = {
  cats: [],
}, action) {
  switch(action.type){
    case 'LOADING_CATS':
      return state;
    case 'FETCH_CATS':
      return state;
    default:
      return state;
  }
}
