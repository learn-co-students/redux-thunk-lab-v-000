export default function catReducer(state = {
  loading: false,
  pictures: []
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
